"use client";
import type React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Camera,
  ChevronDown,
  Square,
  Users,
  School,
  UsersRound,
  Grape,
  Briefcase,
  Wifi,
  MonitorPlay,
  Projector,
  Volume2,
  Mic2,
  ClipboardPen,
  Star,
  MapPin,
  Phone,
  PanelRightClose,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatedDecorativeBar } from "@/components/animated-decorative-bar";
import Link from "next/link";

type EquipmentIcon = React.ForwardRefExoticComponent<
  Omit<React.SVGProps<SVGSVGElement>, "ref"> &
    React.RefAttributes<SVGSVGElement>
>;

interface RoomEquipment {
  id: string;
  name: string;
  icon: EquipmentIcon;
}

interface ConferenceRoom {
  id: string;
  name: string;
  imageSrc: string;
  description: string;
  area: number;
  capacities: {
    theater: string | number;
    classroom: string | number;
    ushape: string | number;
    banquet: string | number;
    boardroom: string | number;
  };
  equipment: RoomEquipment[];
  featured?: boolean;
  badgeText?: string;
  badgeColor?: string;
}

interface BusinessRoomsSelectProps {
  lang?: string;
  dict: any; // Allow any dictionary structure for flexibility
}

export default function ConferenceRoomsComponent({
  lang = "pl",
  dict,
}: BusinessRoomsSelectProps) {
  const phoneNumber = "+48 574 383 282";

  const standardEquipmentList: RoomEquipment[] = [
    {
      id: "wifi",
      name: dict.business.selectRooms.equipment.internet,
      icon: Wifi,
    },
    {
      id: "screen",
      name: dict.business.selectRooms.equipment.screen,
      icon: MonitorPlay,
    },
    {
      id: "projector",
      name: dict.business.selectRooms.equipment.projector,
      icon: Projector,
    },
    {
      id: "sound",
      name: dict.business.selectRooms.equipment.sound,
      icon: Volume2,
    },
    {
      id: "mic",
      name: dict.business.selectRooms.equipment.microphone,
      icon: Mic2,
    },
    {
      id: "slideSwitcher",
      name: dict.business.selectRooms.equipment.slideSwitcher,
      icon: PanelRightClose,
    },
  ];

  const capacityTypes = [
    {
      label: dict.business.selectRooms.capacities.theater,
      icon: Users,
      key: "theater",
      color: "bg-gray-50 text-gray-700 border-gray-200",
    },
    {
      label: dict.business.selectRooms.capacities.classroom,
      icon: School,
      key: "classroom",
      color: "bg-gray-50 text-gray-700 border-gray-200",
    },
    {
      label: dict.business.selectRooms.capacities.ushape,
      icon: UsersRound,
      key: "ushape",
      color: "bg-gray-50 text-gray-700 border-gray-200",
    },
    {
      label: dict.business.selectRooms.capacities.banquet,
      icon: Grape,
      key: "banquet",
      color: "bg-gray-50 text-gray-700 border-gray-200",
    },
    {
      label: dict.business.selectRooms.capacities.boardroom,
      icon: Briefcase,
      key: "boardroom",
      color: "bg-gray-50 text-gray-700 border-gray-200",
    },
  ];

  const conferenceRoomsData: ConferenceRoom[] = [
    {
      id: "bankietowa-a",
      name: dict.business.selectRooms.rooms["bankietowa-a"].name,
      imageSrc: "/conference/bankietowa-a-room-03.jpeg",
      description: dict.business.selectRooms.rooms["bankietowa-a"].description,
      area: 340,
      capacities: {
        theater: 200,
        classroom: 120,
        ushape: 45,
        banquet: 120,
        boardroom: "-",
      },
      equipment: standardEquipmentList,
      featured: true,
    },
    {
      id: "bankietowa-b",
      name: dict.business.selectRooms.rooms["bankietowa-b"].name,
      imageSrc: "/conference/bankietowa-b-room-02.jpeg",
      description: dict.business.selectRooms.rooms["bankietowa-b"].description,
      area: 340,
      capacities: {
        theater: 200,
        classroom: 120,
        ushape: 45,
        banquet: 120,
        boardroom: "-",
      },
      equipment: standardEquipmentList,
    },
    {
      id: "bankietowa-ab",
      name: dict.business.selectRooms.rooms["bankietowa-ab"].name,
      imageSrc: "/conference/bankietowa-ab-room-01.jpeg",
      description: dict.business.selectRooms.rooms["bankietowa-ab"].description,
      area: 680,
      capacities: {
        theater: 400,
        classroom: 200,
        ushape: "-",
        banquet: 280,
        boardroom: "-",
      },
      equipment: standardEquipmentList,
      featured: true,
    },
    {
      id: "foyer-sali-bankietowej",
      name: dict.business.selectRooms.rooms["foyer-sali-bankietowej"].name,
      imageSrc: "/conference/conf-main.png",
      description:
        dict.business.selectRooms.rooms["foyer-sali-bankietowej"].description,
      area: 200,
      capacities: {
        theater: "-",
        classroom: "-",
        ushape: "-",
        banquet: "-",
        boardroom: "-",
      },
      equipment: standardEquipmentList,
      featured: false,
      badgeText: dict.business.selectRooms.badges.exhibitionSpace,
      badgeColor: "bg-orange-500",
    },
    {
      id: "sosnowa-ab",
      name: dict.business.selectRooms.rooms["sosnowa-ab"].name,
      imageSrc: "/conference/sosna-room-01.jpeg",
      description: dict.business.selectRooms.rooms["sosnowa-ab"].description,
      area: 90,
      capacities: {
        theater: 60,
        classroom: 40,
        ushape: 30,
        banquet: 40,
        boardroom: 50,
      },
      equipment: standardEquipmentList,
    },
    {
      id: "sosnowa-a",
      name: dict.business.selectRooms.rooms["sosnowa-a"].name,
      imageSrc: "/conference/sosna-room-03.jpeg",
      description: dict.business.selectRooms.rooms["sosnowa-a"].description,
      area: 45,
      capacities: {
        theater: 30,
        classroom: 20,
        ushape: 15,
        banquet: 20,
        boardroom: 12,
      },
      equipment: standardEquipmentList,
    },
    {
      id: "sosnowa-b",
      name: dict.business.selectRooms.rooms["sosnowa-b"].name,
      imageSrc: "/conference/sosna-room-02.jpeg",
      description: dict.business.selectRooms.rooms["sosnowa-b"].description,
      area: 45,
      capacities: {
        theater: 30,
        classroom: 20,
        ushape: 15,
        banquet: 20,
        boardroom: 12,
      },
      equipment: standardEquipmentList,
    },
    {
      id: "kominkowa",
      name: dict.business.selectRooms.rooms["kominkowa"].name,
      imageSrc: "/conference/kominkowa-room-01.jpeg",
      description: dict.business.selectRooms.rooms["kominkowa"].description,
      area: 45,
      capacities: {
        theater: "-",
        classroom: "-",
        ushape: "-",
        banquet: "-",
        boardroom: 20,
      },
      equipment: standardEquipmentList,
      badgeText: dict.business.selectRooms.badges.prestigious,
      badgeColor: "bg-purple-600",
    },
    {
      id: "sala-vip",
      name: dict.business.selectRooms.rooms["sala-vip"].name,
      imageSrc: "/conference/conf-vip-01.jpeg",
      description: dict.business.selectRooms.rooms["sala-vip"].description,
      area: 20,
      capacities: {
        theater: "-",
        classroom: "-",
        ushape: "-",
        banquet: "-",
        boardroom: 10,
      },
      equipment: standardEquipmentList,
      featured: true,
    },
    {
      id: "konferencyjna-ab",
      name: dict.business.selectRooms.rooms["konferencyjna-ab"].name,
      imageSrc: "/conference/conf-01.webp",
      description:
        dict.business.selectRooms.rooms["konferencyjna-ab"].description,
      area: 110,
      capacities: {
        theater: 90,
        classroom: 50,
        ushape: 40,
        banquet: "-",
        boardroom: 50,
      },
      equipment: standardEquipmentList,
      featured: true,
    },
    {
      id: "konferencyjna-a",
      name: dict.business.selectRooms.rooms["konferencyjna-a"].name,
      imageSrc: "/conference/conf-01.webp",
      description:
        dict.business.selectRooms.rooms["konferencyjna-a"].description,
      area: 50,
      capacities: {
        theater: 40,
        classroom: 30,
        ushape: 15,
        banquet: "-",
        boardroom: 20,
      },
      equipment: standardEquipmentList,
      featured: false,
    },
    {
      id: "konferencyjna-b",
      name: dict.business.selectRooms.rooms["konferencyjna-b"].name,
      imageSrc: "/conference/conf-01.webp",
      description:
        dict.business.selectRooms.rooms["konferencyjna-b"].description,
      area: 50,
      capacities: {
        theater: 50,
        classroom: 35,
        ushape: 20,
        banquet: "-",
        boardroom: 30,
      },
      equipment: standardEquipmentList,
      featured: false,
    },
    {
      id: "fort-no-4",
      name: dict.business.selectRooms.rooms["fort-no-4"].name,
      imageSrc: "/conference/conf-fort-01.jpeg",
      description: dict.business.selectRooms.rooms["fort-no-4"].description,
      area: 350,
      capacities: {
        theater: 65,
        classroom: 35,
        ushape: "-",
        banquet: 130,
        boardroom: "-",
      },
      equipment: standardEquipmentList,
      featured: false,
      badgeText: dict.business.selectRooms.badges.greenConferences,
      badgeColor: "bg-green-600",
    },
  ];

  return (
    <div className="mt-8 mb-10 bg-gradient-to-br from-gray-50 to-white w-full text-primary py-8 md:py-10">
      <div className="max-w-7xl mx-auto sm:px-4 whitespace-pre-line">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 md:mb-16 px-4 sm:px-0"
        >
          <div className="max-w-4xl">
            <AnimatedDecorativeBar />
            <h1 className="title-light text-left mb-6">
              {dict.business.selectRooms.title}
            </h1>
            <p className="max-w-3xl main-paragraph-light text-left">
              {dict.business.selectRooms.description}
            </p>
          </div>
        </motion.div>

        {/* Rooms Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6"
        >
          {conferenceRoomsData.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value={room.id} className="border-none">
                  <AccordionTrigger className="p-0 hover:no-underline">
                    <div className="w-full p-6 md:p-8">
                      {/* Mobile Layout */}
                      <div className="block md:hidden">
                        <div className="flex items-start justify-between mb-6">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3">
                              <div className="p-2 bg-avangarda/10">
                                <Camera className="h-5 w-5 text-avangarda" />
                              </div>
                              <div>
                                <h3 className="font-bold text-lg text-slate-800 text-left">
                                  {room.name}
                                </h3>
                                {room.featured && (
                                  <Badge className="bg-avangarda text-white text-xs mt-1">
                                    <Star className="h-3 w-3 mr-1" />
                                    {dict.business.selectRooms.popularBadge}
                                  </Badge>
                                )}
                                {room.badgeText && (
                                  <Badge
                                    className={`${
                                      room.badgeColor || "bg-gray-500"
                                    } text-white text-xs mt-1`}
                                  >
                                    {room.badgeText}
                                  </Badge>
                                )}
                              </div>
                            </div>
                            <div className="flex items-center gap-6 text-sm text-slate-600 mb-4">
                              <div className="flex items-center gap-2 bg-gray-50 px-3 py-2">
                                <Square className="h-4 w-4 text-avangarda" />
                                <span className="font-medium">
                                  {room.area} m²
                                </span>
                              </div>
                              <div className="flex items-center gap-2 bg-gray-50 px-3 py-2">
                                <Users className="h-4 w-4 text-avangarda" />
                                <span className="font-medium">
                                  {(() => {
                                    const maxCapacity = Math.max(
                                      ...Object.values(room.capacities).filter(
                                        (v) => typeof v === "number"
                                      )
                                    );
                                    return maxCapacity === -Infinity
                                      ? ""
                                      : `${dict.business.selectRooms.up} ${maxCapacity} ${dict.business.selectRooms.capacities.people}`;
                                  })()}
                                </span>
                              </div>
                            </div>
                          </div>
                          <ChevronDown className="h-6 w-6 text-slate-400 transition-transform duration-200 group-data-[state=open]:rotate-180 shrink-0 ml-4" />
                        </div>

                        {/* Mobile Capacity Grid */}
                        <div className="grid grid-cols-2 gap-3">
                          {capacityTypes.map((type) => {
                            const capacity =
                              room.capacities[
                                type.key as keyof typeof room.capacities
                              ];
                            return (
                              <div
                                key={type.key}
                                className={cn(
                                  "flex items-center justify-between p-3 border",
                                  type.color
                                )}
                              >
                                <div className="flex items-center gap-2">
                                  <type.icon className="h-4 w-4" />
                                  <span className="font-medium text-sm">
                                    {type.label}
                                  </span>
                                </div>
                                <span className="font-bold text-sm">
                                  {capacity}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Desktop Layout */}
                      <div className="hidden md:block">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-6 flex-1">
                            <div className="p-3 bg-avangarda/10">
                              <Camera className="h-8 w-8 text-avangarda" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-4 mb-3">
                                <h3 className="font-bold text-xl text-slate-800">
                                  {room.name}
                                </h3>
                                {room.featured && (
                                  <Badge className="bg-avangarda text-white">
                                    <Star className="h-4 w-4 mr-1" />
                                    {dict.business.selectRooms.popularBadge}
                                  </Badge>
                                )}
                                {room.badgeText && (
                                  <Badge
                                    className={`${
                                      room.badgeColor || "bg-gray-500"
                                    } text-white`}
                                  >
                                    {room.badgeText}
                                  </Badge>
                                )}
                              </div>
                              <div className="flex items-center gap-4 mb-4">
                                <div className="flex items-center gap-2 bg-gray-50 px-4 py-2">
                                  <Square className="h-5 w-5 text-avangarda" />
                                  <span className="font-semibold text-slate-700">
                                    {room.area} m²
                                  </span>
                                </div>
                                <div className="flex items-center gap-2 bg-gray-50 px-4 py-2">
                                  <Users className="h-5 w-5 text-avangarda" />
                                  <span className="font-semibold text-slate-700">
                                    {(() => {
                                      const maxCapacity = Math.max(
                                        ...Object.values(
                                          room.capacities
                                        ).filter((v) => typeof v === "number")
                                      );
                                      return maxCapacity === -Infinity
                                        ? ""
                                        : `${dict.business.selectRooms.up} ${maxCapacity} ${dict.business.selectRooms.capacities.people}`;
                                    })()}
                                  </span>
                                </div>
                              </div>
                              <div className="grid grid-cols-5 gap-3">
                                {capacityTypes.map((type) => {
                                  const capacity =
                                    room.capacities[
                                      type.key as keyof typeof room.capacities
                                    ];
                                  return (
                                    <div
                                      key={type.key}
                                      className={cn(
                                        "flex items-center justify-between p-3 border",
                                        type.color
                                      )}
                                    >
                                      <div className="flex items-center gap-2">
                                        <type.icon className="h-4 w-4" />
                                        <span className="font-medium text-xs">
                                          {type.label}
                                        </span>
                                      </div>
                                      <span className="font-bold text-sm">
                                        {capacity}
                                      </span>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                          <ChevronDown className="h-6 w-6 text-slate-400 transition-transform duration-200 group-data-[state=open]:rotate-180 ml-6" />
                        </div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="p-0">
                    <div className="border-t border-gray-100 bg-gradient-to-br from-gray-50 to-white p-6 md:p-8">
                      <div className="grid md:grid-cols-12 gap-8 items-start">
                        {/* Image */}
                        <div className="md:col-span-5 relative aspect-[4/3] w-full overflow-hidden shadow-lg">
                          <Image
                            src={room.imageSrc || "/placeholder.svg"}
                            alt={`${dict.business.selectRooms.imageAlt} ${dict.business.selectRooms.rooms[room.id as keyof typeof dict.business.selectRooms.rooms]?.name || room.name}`}
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </div>

                        {/* Description */}
                        <div className="md:col-span-3 space-y-6">
                          <div>
                            <h4 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                              <div className="w-2 h-6 bg-avangarda rounded-full"></div>
                              {dict.business.selectRooms.roomDescription}
                            </h4>
                            <p className="text-slate-600 leading-relaxed">
                              {room.description}
                            </p>
                          </div>
                          <Link
                            href={`tel:${phoneNumber.replace(/\s+/g, "")}`}
                            className="flex items-center gap-2"
                          >
                            <Button
                              size="lg"
                              className="w-fit"
                              variant="fillRight"
                            >
                              <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
                              {dict.business.selectRooms.askAboutRoom}
                            </Button>
                          </Link>
                        </div>

                        {/* Equipment */}
                        <div className="md:col-span-4">
                          <h4 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                            <div className="w-2 h-6 bg-avangarda rounded-full"></div>
                            {dict.business.selectRooms.equipmentTitle}
                          </h4>
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 mb-6">
                            {room.equipment.map((equip) => (
                              <div
                                key={equip.id}
                                className="flex items-center gap-2 text-sm text-slate-700 bg-white p-2 shadow-sm border border-gray-100"
                              >
                                <div className="p-1.5 bg-avangarda/10">
                                  <equip.icon className="h-3.5 w-3.5 text-avangarda" />
                                </div>
                                <span className="font-medium">
                                  {equip.name}
                                </span>
                              </div>
                            ))}
                          </div>
                          <div className="p-4 bg-gray-50 border border-gray-200">
                            <p className="text-sm text-gray-800 leading-relaxed">
                              <strong className="text-gray-900">
                                {dict.business.selectRooms.additionalEquipment}
                              </strong>{" "}
                              {
                                dict.business.selectRooms
                                  .additionalEquipmentDescription
                              }
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
