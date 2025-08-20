#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Define the conversion mappings for each component
const COMPONENT_CONVERSIONS = {
  'components/modules/Events/EventsIntro.tsx': {
    interfaceUpdate: `
    dict: {
      events: {
        title: string;
        description: string;
        venuesTitle: string;
        venuesDescription: string;
        venueInfo: {
          maxGuests: string;
          people: string;
          area: string;
          amenities: string;
        };
      };
    };`,
    conversions: [
      { from: 't("events.title")', to: 'dict.events.title' },
      { from: 't("events.description")', to: 'dict.events.description' },
      { from: 't("events.venuesTitle")', to: 'dict.events.venuesTitle' },
      { from: 't("events.venuesDescription")', to: 'dict.events.venuesDescription' },
      { from: 't("events.venueInfo.maxGuests")', to: 'dict.events.venueInfo.maxGuests' },
      { from: 't("events.venueInfo.people")', to: 'dict.events.venueInfo.people' },
      { from: 't("events.venueInfo.area")', to: 'dict.events.venueInfo.area' },
      { from: 't("events.venueInfo.amenities")', to: 'dict.events.venueInfo.amenities' },
    ]
  },
  'components/modules/Offers/OffersIntro.tsx': {
    interfaceUpdate: `
    dict: {
      offers: {
        browseTitle: string;
      };
    };`,
    conversions: [
      { from: 't("offers.browseTitle")', to: 'dict.offers.browseTitle' },
    ]
  }
};

function updateComponent(filePath, config) {
  console.log(`\n🔄 Converting ${filePath}...`);
  
  let content = fs.readFileSync(filePath, 'utf8');
  let changes = 0;
  
  // Remove the getNestedValue function
  content = content.replace(
    /\/\/ Helper function to get nested dictionary values using dot notation\s*\nconst getNestedValue = \(obj: any, path: string\) => \{\s*\n\s*return path\.split\("\.""\)\.reduce\(\(acc, part\) => acc && acc\[part\], obj\);\s*\n\};\s*\n/g,
    ''
  );
  
  // Remove the t function definition
  content = content.replace(
    /const t = \(key: string\) => getNestedValue\(dict, key\) \|\| key;\s*\n/g,
    ''
  );
  
  // Update interface if provided
  if (config.interfaceUpdate) {
    content = content.replace(
      /dict: any;/g,
      config.interfaceUpdate.trim()
    );
  }
  
  // Apply conversions
  config.conversions.forEach(conversion => {
    const oldCount = (content.match(new RegExp(conversion.from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) || []).length;
    content = content.replace(
      new RegExp(conversion.from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'),
      conversion.to
    );
    const newCount = (content.match(new RegExp(conversion.to.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) || []).length;
    if (newCount > 0) {
      changes += newCount;
      console.log(`  ✅ Converted: ${conversion.from} → ${conversion.to}`);
    }
  });
  
  // Write the updated content
  fs.writeFileSync(filePath, content);
  console.log(`  📝 Applied ${changes} changes to ${filePath}`);
  
  return changes;
}

async function convertAllComponents() {
  console.log('🚀 Starting automatic conversion from t() to direct dictionary access...\n');
  
  let totalChanges = 0;
  
  for (const [componentPath, config] of Object.entries(COMPONENT_CONVERSIONS)) {
    const fullPath = path.join(process.cwd(), componentPath);
    
    if (fs.existsSync(fullPath)) {
      const changes = updateComponent(fullPath, config);
      totalChanges += changes;
    } else {
      console.log(`⚠️  File not found: ${componentPath}`);
    }
  }
  
  console.log(`\n📊 CONVERSION SUMMARY:`);
  console.log(`======================`);
  console.log(`Total changes applied: ${totalChanges}`);
  console.log(`Components converted: ${Object.keys(COMPONENT_CONVERSIONS).length}`);
  
  // Remove files that were problematic during cleanup
  const filesToCleanup = [
    'components/modules/Gastro/GastroCTA.tsx', // Contains diningDetails keys that were removed
  ];
  
  console.log(`\n🧹 Checking problematic files...`);
  filesToCleanup.forEach(filePath => {
    const fullPath = path.join(process.cwd(), filePath);
    if (fs.existsSync(fullPath)) {
      const content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes('diningDetails')) {
        console.log(`⚠️  ${filePath} still contains removed 'diningDetails' keys - needs manual review`);
      }
    }
  });
  
  console.log('\n✅ Conversion completed!');
}

// Run the conversion
convertAllComponents().catch(console.error);
