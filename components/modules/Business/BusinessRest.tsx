"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Wine,
  Clock,
  Music,
  Users,
  Utensils,
  Flame,
  TreePine,
  Fish,
  Waves,
  SandwichIcon as Hamburger,
  VibrateIcon as Volleyball,
  Bike,
  Cherry,
  Download,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { AnimatedDecorativeBar } from "@/components/animated-decorative-bar";
import { fileUrl } from "@/lib/fileUrl";

interface BusinessEntertainmentProps {
  dict: {
    business: {
      entertainment: {
        title: string;
        subtitle: string;
        description1: string;
        description2: string;
        description3: string;
        spacesTitle: string;
        spacesDescription: string;
        downloadOffer: string;
        spaces: {
          club: {
            title: string;
            badge: string;
            description: string;
            features: {
              bowling: string;
              bowlingDesc: string;
              billiard: string;
              billiardDesc: string;
              sport: string;
              sportDesc: string;
              exclusivity: string;
              exclusivityDesc: string;
              bar: string;
              barDesc: string;
              music: string;
              musicDesc: string;
            };
          };
          outdoor: {
            title: string;
            badge: string;
            description: string;
            features: {
              treasure: string;
              treasureDesc: string;
              shooting: string;
              shootingDesc: string;
              paintball: string;
              paintballDesc: string;
              quads: string;
              quadsDesc: string;
              nordic: string;
              nordicDesc: string;
              csr: string;
              csrDesc: string;
            };
          };
          fort: {
            title: string;
            badge: string;
            description: string;
            features: {
              availability: string;
              availabilityDesc: string;
              amphitheatre: string;
              amphitheatreDesc: string;
              cooking: string;
              cookingDesc: string;
              covered: string;
              coveredDesc: string;
              animations: string;
              animationsDesc: string;
              music: string;
              musicDesc: string;
            };
          };
          dymna: {
            title: string;
            description1: string;
            description2: string;
            features: {
              availability: string;
              availabilityDesc: string;
              fireplace: string;
              fireplaceDesc: string;
              gazebos: string;
              gazebosDesc: string;
              loungers: string;
              loungersDesc: string;
              nature: string;
              natureDesc: string;
            };
          };
          przystan: {
            title: string;
            description: string;
            mediterraneanButton: string;
            features: {
              availability: string;
              availabilityDesc: string;
              kayaking: string;
              kayakingDesc: string;
              tournament: string;
              tournamentDesc: string;
              beaching: string;
              beachingDesc: string;
              dinners: string;
              dinnersDesc: string;
              music: string;
              musicDesc: string;
            };
          };
        };
      };
    };
  };
  lang?: string;
  entertainmentOffers?: {
    club?: any;
    outdoor?: any;
    fort?: any;
    dymna?: any;
    przystan?: any;
    mediterranean?: any;
  };
}

export default function BusinessEntertainment({
  dict,
  lang = "pl",
  entertainmentOffers,
}: BusinessEntertainmentProps) {
  const [selectedTab, setSelectedTab] = useState<string>("club");
  const phoneNumber = "+48 29 752 50 34";

  return (
    <div className="mt-6 sm:mt-6 md:mt-4 lg:mt-0 mb-6 lg:mb-0 bg-white w-full text-primary lg:py-10">
      <div className="max-w-7xl mx-auto sm:px-4 ">
        {/* Introduction Section - Image on left, text on right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-16 px-4 sm:px-0">
          {/* Image on the left - aligned with DecorativeBar and matching text height */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="h-full"
          >
            <div className="relative aspect-[4/5]  overflow-hidden">
              <Image
                src="/conference/team-building.png"
                alt="Team building"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Text on the right - starts with DecorativeBar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-10 flex flex-col h-full whitespace-pre-line"
          >
            <AnimatedDecorativeBar />
            <h1 className="title-light">
              {dict.business.entertainment.title} <br />
              {dict.business.entertainment.subtitle}
            </h1>
            <p className="main-paragraph-light">
              {dict.business.entertainment.description1}
            </p>
            <p className="main-paragraph-light">
              {dict.business.entertainment.description2}
            </p>
            <p className="main-paragraph-light">
              {dict.business.entertainment.description3}
            </p>
          </motion.div>
        </div>

        <div className="flex items-center justify-center gap-3 mb-8 whitespace-pre-line">
          <h2 className="text-3xl font-semibold text-center">
            {dict.business.entertainment.spacesTitle}
          </h2>
        </div>
        <p className="main-paragraph-light text-center mb-8 max-w-3xl mx-auto whitespace-pre-line">
          {dict.business.entertainment.spacesDescription}
        </p>

        {/* Entertainment Options Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20 px-4 sm:px-0 whitespace-pre-line"
        >
          <Tabs
            defaultValue="club"
            className="w-full"
            onValueChange={setSelectedTab}
          >
            <TabsList className="flex flex-wrap justify-center gap-2 w-full max-w-5xl mx-auto mb-12 bg-gray-100 rounded-2xl p-3 h-auto min-h-[60px]">
              <TabsTrigger
                value="club"
                className="data-[state=active]:bg-white data-[state=active]:text-avangarda data-[state=active]:shadow-md rounded-xl font-semibold px-4 py-2.5 text-sm whitespace-nowrap transition-all duration-200 hover:bg-white/50"
              >
                {dict.business.entertainment.spaces.club.title}
              </TabsTrigger>
              <TabsTrigger
                value="outdoor"
                className="data-[state=active]:bg-white data-[state=active]:text-avangarda data-[state=active]:shadow-md rounded-xl font-semibold px-4 py-2.5 text-sm whitespace-nowrap transition-all duration-200 hover:bg-white/50"
              >
                {dict.business.entertainment.spaces.outdoor.title}
              </TabsTrigger>
              <TabsTrigger
                value="fort"
                className="data-[state=active]:bg-white data-[state=active]:text-avangarda data-[state=active]:shadow-md rounded-xl font-semibold px-4 py-2.5 text-sm whitespace-nowrap transition-all duration-200 hover:bg-white/50"
              >
                {dict.business.entertainment.spaces.fort.title}
              </TabsTrigger>
              <TabsTrigger
                value="dymna"
                className="data-[state=active]:bg-white data-[state=active]:text-avangarda data-[state=active]:shadow-md rounded-xl font-semibold px-4 py-2.5 text-sm whitespace-nowrap transition-all duration-200 hover:bg-white/50"
              >
                {dict.business.entertainment.spaces.dymna.title}
              </TabsTrigger>
              <TabsTrigger
                value="przystan"
                className="data-[state=active]:bg-white data-[state=active]:text-avangarda data-[state=active]:shadow-md rounded-xl font-semibold px-4 py-2.5 text-sm whitespace-nowrap transition-all duration-200 hover:bg-white/50"
              >
                {
                  dict.business.entertainment.spaces.przystan.title.split(
                    " - "
                  )[0]
                }
              </TabsTrigger>
            </TabsList>

            <TabsContent value="club" className="space-y-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-2xl font-semibold">
                        {dict.business.entertainment.spaces.club.title}
                      </h3>
                      <Badge className="bg-avangarda/10 text-avangarda rounded-md">
                        {dict.business.entertainment.spaces.club.badge}
                      </Badge>
                    </div>
                    <p className="main-paragraph-light">
                      {dict.business.entertainment.spaces.club.description}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    <div className="bg-avangarda/10 p-4 text-center">
                      <Users className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">
                        {
                          dict.business.entertainment.spaces.club.features
                            .bowling
                        }
                      </p>
                      <p className="text-xs">
                        {
                          dict.business.entertainment.spaces.club.features
                            .bowlingDesc
                        }
                      </p>
                    </div>
                    <div className="bg-avangarda/10 p-4 text-center">
                      <Users className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">
                        {
                          dict.business.entertainment.spaces.club.features
                            .billiard
                        }
                      </p>
                      <p className="text-xs">
                        {
                          dict.business.entertainment.spaces.club.features
                            .billiardDesc
                        }
                      </p>
                    </div>
                    <div className="bg-avangarda/10 p-4 text-center">
                      <Users className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">
                        {dict.business.entertainment.spaces.club.features.sport}
                      </p>
                      <p className="text-xs">
                        {
                          dict.business.entertainment.spaces.club.features
                            .sportDesc
                        }
                      </p>
                    </div>
                    <div className="bg-avangarda/10 p-4 text-center">
                      <Wine className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">
                        {
                          dict.business.entertainment.spaces.club.features
                            .exclusivity
                        }
                      </p>
                      <p className="text-xs">
                        {
                          dict.business.entertainment.spaces.club.features
                            .exclusivityDesc
                        }
                      </p>
                    </div>
                    <div className="bg-avangarda/10 p-4 text-center">
                      <Wine className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">
                        {dict.business.entertainment.spaces.club.features.bar}
                      </p>
                      <p className="text-xs">
                        {
                          dict.business.entertainment.spaces.club.features
                            .barDesc
                        }
                      </p>
                    </div>
                    <div className="bg-avangarda/10 p-4 text-center">
                      <Music className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">
                        {dict.business.entertainment.spaces.club.features.music}
                      </p>
                      <p className="text-xs">
                        {
                          dict.business.entertainment.spaces.club.features
                            .musicDesc
                        }
                      </p>
                    </div>
                  </div>
                  {entertainmentOffers?.club &&
                    entertainmentOffers.club.offerFile && (
                      <div className="mt-4">
                        <Link
                          href={fileUrl(entertainmentOffers.club.offerFile)}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button variant="avangarda" size="lg">
                            <Download className="h-3 w-3 sm:h-4 sm:w-4" />
                            {dict.business.entertainment.downloadOffer}
                          </Button>
                        </Link>
                      </div>
                    )}
                </div>
                <div className="space-y-6">
                  <div className="relative aspect-video w-full h-[500px] md:h-[600px] overflow-hidden ">
                    <Image
                      src="/klub/klub-04.JPG"
                      alt="Klub Coola"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="outdoor" className="space-y-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-2xl font-semibold">
                        {dict.business.entertainment.spaces.outdoor.title}
                      </h3>
                      <Badge className="bg-avangarda/10 text-avangarda rounded-md">
                        {dict.business.entertainment.spaces.outdoor.badge}
                      </Badge>
                    </div>
                    <p className="main-paragraph-light">
                      {dict.business.entertainment.spaces.outdoor.description}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    <div className="bg-avangarda/10 p-4 text-center ">
                      <Waves className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">
                        {
                          dict.business.entertainment.spaces.outdoor.features
                            .treasure
                        }
                      </p>
                      <p className="text-xs">
                        {
                          dict.business.entertainment.spaces.outdoor.features
                            .treasureDesc
                        }
                      </p>
                    </div>
                    <div className="bg-avangarda/10 p-4 text-center ">
                      <Hamburger className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">
                        {
                          dict.business.entertainment.spaces.outdoor.features
                            .shooting
                        }
                      </p>
                      <p className="text-xs">
                        {
                          dict.business.entertainment.spaces.outdoor.features
                            .shootingDesc
                        }
                      </p>
                    </div>
                    <div className="bg-avangarda/10 p-4 text-center ">
                      <Volleyball className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">
                        {
                          dict.business.entertainment.spaces.outdoor.features
                            .paintball
                        }
                      </p>
                      <p className="text-xs">
                        {
                          dict.business.entertainment.spaces.outdoor.features
                            .paintballDesc
                        }
                      </p>
                    </div>
                    <div className="bg-avangarda/10 p-4 text-center ">
                      <Clock className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">
                        {
                          dict.business.entertainment.spaces.outdoor.features
                            .quads
                        }
                      </p>
                      <p className="text-xs">
                        {
                          dict.business.entertainment.spaces.outdoor.features
                            .quadsDesc
                        }
                      </p>
                    </div>
                    <div className="bg-avangarda/10 p-4 text-center ">
                      <Bike className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">
                        {
                          dict.business.entertainment.spaces.outdoor.features
                            .nordic
                        }
                      </p>
                      <p className="text-xs">
                        {
                          dict.business.entertainment.spaces.outdoor.features
                            .nordicDesc
                        }
                      </p>
                    </div>
                    <div className="bg-avangarda/10 p-4 text-center ">
                      <Cherry className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">
                        {
                          dict.business.entertainment.spaces.outdoor.features
                            .csr
                        }
                      </p>
                      <p className="text-xs">
                        {
                          dict.business.entertainment.spaces.outdoor.features
                            .csrDesc
                        }
                      </p>
                    </div>
                  </div>
                  {entertainmentOffers?.outdoor &&
                    entertainmentOffers.outdoor.offerFile && (
                      <div className="mt-4">
                        <Link
                          href={fileUrl(entertainmentOffers.outdoor.offerFile)}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button variant="avangarda" size="lg">
                            <Download className="h-3 w-3 sm:h-4 sm:w-4" />
                            {dict.business.entertainment.downloadOffer}
                          </Button>
                        </Link>
                      </div>
                    )}
                </div>
                <div className="space-y-6">
                  {/* Full-width image for outdoor tab */}
                  <div className="relative aspect-video w-full h-[500px] md:h-[600px] overflow-hidden ">
                    <Image
                      src="/entertainment/10.jpeg"
                      alt={dict.business.entertainment.spaces.outdoor.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="fort" className="space-y-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-2xl font-semibold">
                        {dict.business.entertainment.spaces.fort.title}
                      </h3>
                      <Badge className="bg-avangarda/10 text-avangarda rounded-md">
                        {dict.business.entertainment.spaces.fort.badge}
                      </Badge>
                    </div>
                    <p className="main-paragraph-light">
                      {dict.business.entertainment.spaces.fort.description}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    <div className="bg-avangarda/10 p-4 text-center">
                      <Flame className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">
                        {
                          dict.business.entertainment.spaces.fort.features
                            .availability
                        }
                      </p>
                      <p className="text-xs">
                        {
                          dict.business.entertainment.spaces.fort.features
                            .availabilityDesc
                        }
                      </p>
                    </div>
                    <div className="bg-avangarda/10 p-4 text-center">
                      <Users className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">
                        {
                          dict.business.entertainment.spaces.fort.features
                            .amphitheatre
                        }
                      </p>
                      <p className="text-xs">
                        {
                          dict.business.entertainment.spaces.fort.features
                            .amphitheatreDesc
                        }
                      </p>
                    </div>
                    <div className="bg-avangarda/10 p-4 text-center">
                      <TreePine className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">
                        {
                          dict.business.entertainment.spaces.fort.features
                            .cooking
                        }
                      </p>
                      <p className="text-xs">
                        {
                          dict.business.entertainment.spaces.fort.features
                            .cookingDesc
                        }
                      </p>
                    </div>
                    <div className="bg-avangarda/10 p-4 text-center">
                      <Clock className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">
                        {
                          dict.business.entertainment.spaces.fort.features
                            .covered
                        }
                      </p>
                      <p className="text-xs">
                        {
                          dict.business.entertainment.spaces.fort.features
                            .coveredDesc
                        }
                      </p>
                    </div>
                    <div className="bg-avangarda/10 p-4 text-center">
                      <Utensils className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">
                        {
                          dict.business.entertainment.spaces.fort.features
                            .animations
                        }
                      </p>
                      <p className="text-xs">
                        {
                          dict.business.entertainment.spaces.fort.features
                            .animationsDesc
                        }
                      </p>
                    </div>
                    <div className="bg-avangarda/10 p-4 text-center">
                      <Music className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">
                        {dict.business.entertainment.spaces.fort.features.music}
                      </p>
                      <p className="text-xs">
                        {
                          dict.business.entertainment.spaces.fort.features
                            .musicDesc
                        }
                      </p>
                    </div>
                  </div>
                  {entertainmentOffers?.fort &&
                    entertainmentOffers.fort.offerFile && (
                      <div className="mt-4">
                        <Link
                          href={fileUrl(entertainmentOffers.fort.offerFile)}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button variant="avangarda" size="lg">
                            <Download className="h-3 w-3 sm:h-4 sm:w-4" />
                            {dict.business.entertainment.downloadOffer}
                          </Button>
                        </Link>
                      </div>
                    )}
                </div>
                <div className="space-y-6">
                  <div className="relative aspect-video w-full h-[600px] overflow-hidden">
                    <Image
                      src="/fort/fort-main-01.jpeg"
                      alt="Fort No. 4"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="dymna" className="space-y-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-2xl font-semibold">
                        {dict.business.entertainment.spaces.dymna.title}
                      </h3>
                    </div>
                    <p className="main-paragraph-light">
                      {dict.business.entertainment.spaces.dymna.description1}
                    </p>
                    <p className="main-paragraph-light">
                      {dict.business.entertainment.spaces.dymna.description2}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    <div className="bg-avangarda/10 p-4 text-center">
                      <Fish className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">
                        {
                          dict.business.entertainment.spaces.dymna.features
                            .availability
                        }
                      </p>
                      <p className="text-xs">
                        {
                          dict.business.entertainment.spaces.dymna.features
                            .availabilityDesc
                        }
                      </p>
                    </div>
                    <div className="bg-avangarda/10 p-4 text-center">
                      <Utensils className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">
                        {
                          dict.business.entertainment.spaces.dymna.features
                            .fireplace
                        }
                      </p>
                      <p className="text-xs">
                        {
                          dict.business.entertainment.spaces.dymna.features
                            .fireplaceDesc
                        }
                      </p>
                    </div>
                    <div className="bg-avangarda/10 p-4 text-center">
                      <Wine className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">
                        {
                          dict.business.entertainment.spaces.dymna.features
                            .gazebos
                        }
                      </p>
                      <p className="text-xs">
                        {
                          dict.business.entertainment.spaces.dymna.features
                            .gazebosDesc
                        }
                      </p>
                    </div>
                    <div className="bg-avangarda/10 p-4 text-center">
                      <Clock className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">
                        {
                          dict.business.entertainment.spaces.dymna.features
                            .loungers
                        }
                      </p>
                      <p className="text-xs">
                        {
                          dict.business.entertainment.spaces.dymna.features
                            .loungersDesc
                        }
                      </p>
                    </div>
                    <div className="bg-avangarda/10 p-4 text-center">
                      <TreePine className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">
                        {
                          dict.business.entertainment.spaces.dymna.features
                            .nature
                        }
                      </p>
                      <p className="text-xs">
                        {
                          dict.business.entertainment.spaces.dymna.features
                            .natureDesc
                        }
                      </p>
                    </div>
                  </div>
                  {entertainmentOffers?.dymna &&
                    entertainmentOffers.dymna.offerFile && (
                      <div className="mt-4">
                        <Link
                          href={fileUrl(entertainmentOffers.dymna.offerFile)}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button variant="avangarda" size="lg">
                            <Download className="h-3 w-3 sm:h-4 sm:w-4" />
                            {dict.business.entertainment.downloadOffer}
                          </Button>
                        </Link>
                      </div>
                    )}
                </div>
                <div className="space-y-6">
                  <div className="relative aspect-video w-full  h-[500px] md:h-[700px] overflow-hidden">
                    <Image
                      src="/outdoor/room-barbec-01.jpeg"
                      alt="Dymna Polana"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="przystan" className="space-y-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-2xl font-semibold">
                        {dict.business.entertainment.spaces.przystan.title}
                      </h3>
                    </div>
                    <p className="main-paragraph-light">
                      {dict.business.entertainment.spaces.przystan.description}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    <div className="bg-avangarda/10 p-4 text-center">
                      <Fish className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">
                        {
                          dict.business.entertainment.spaces.przystan.features
                            .availability
                        }
                      </p>
                      <p className="text-xs">
                        {
                          dict.business.entertainment.spaces.przystan.features
                            .availabilityDesc
                        }
                      </p>
                    </div>
                    <div className="bg-avangarda/10 p-4 text-center">
                      <Utensils className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">
                        {
                          dict.business.entertainment.spaces.przystan.features
                            .kayaking
                        }
                      </p>
                      <p className="text-xs">
                        {
                          dict.business.entertainment.spaces.przystan.features
                            .kayakingDesc
                        }
                      </p>
                    </div>
                    <div className="bg-avangarda/10 p-4 text-center">
                      <Wine className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">
                        {
                          dict.business.entertainment.spaces.przystan.features
                            .tournament
                        }
                      </p>
                      <p className="text-xs">
                        {
                          dict.business.entertainment.spaces.przystan.features
                            .tournamentDesc
                        }
                      </p>
                    </div>
                    <div className="bg-avangarda/10 p-4 text-center">
                      <Clock className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">
                        {
                          dict.business.entertainment.spaces.przystan.features
                            .beaching
                        }
                      </p>
                      <p className="text-xs">
                        {
                          dict.business.entertainment.spaces.przystan.features
                            .beachingDesc
                        }
                      </p>
                    </div>
                    <div className="bg-avangarda/10 p-4 text-center">
                      <TreePine className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">
                        {
                          dict.business.entertainment.spaces.przystan.features
                            .dinners
                        }
                      </p>
                      <p className="text-xs">
                        {
                          dict.business.entertainment.spaces.przystan.features
                            .dinnersDesc
                        }
                      </p>
                    </div>
                    <div className="bg-avangarda/10 p-4 text-center">
                      <Users className="h-5 w-5 mx-auto mb-1 text-avangarda" />
                      <p className="text-sm font-medium">
                        {
                          dict.business.entertainment.spaces.przystan.features
                            .music
                        }
                      </p>
                      <p className="text-xs">
                        {
                          dict.business.entertainment.spaces.przystan.features
                            .musicDesc
                        }
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    {entertainmentOffers?.przystan &&
                      entertainmentOffers.przystan.offerFile && (
                        <div className="mt-4">
                          <Link
                            href={fileUrl(
                              entertainmentOffers.przystan.offerFile
                            )}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button variant="avangarda" size="lg">
                              <Download className="h-3 w-3 sm:h-4 sm:w-4" />
                              {dict.business.entertainment.downloadOffer}
                            </Button>
                          </Link>
                        </div>
                      )}
                    {entertainmentOffers?.mediterranean &&
                      entertainmentOffers.mediterranean.offerFile && (
                        <div className="mt-4">
                          <Link
                            href={fileUrl(
                              entertainmentOffers.mediterranean.offerFile
                            )}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button variant="avangarda" size="lg">
                              <Download className="h-3 w-3 sm:h-4 sm:w-4" />
                              {
                                dict.business.entertainment.spaces.przystan
                                  .mediterraneanButton
                              }
                            </Button>
                          </Link>
                        </div>
                      )}
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="relative aspect-video w-full h-[500px] md:h-[600px] overflow-hidden">
                    <Image
                      src="/restaurant/bar-przystan-main.jpeg"
                      alt={
                        dict.business.entertainment.spaces.przystan.title.split(
                          " - "
                        )[0]
                      }
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
}
