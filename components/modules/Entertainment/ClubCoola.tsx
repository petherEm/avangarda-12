"use client";
import { Container } from "@/components/container";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Music, Calendar, Clock, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function ClubCoola() {
  return (
    <Container className="mt-6 sm:mt-6 md:mt-4 lg:mt-0 mb-6 lg:mb-0 bg-white w-full text-primary lg:py-20">
      <div className="max-w-7xl mx-auto sm:px-4">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-16">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="title-light"
            >
              Klub Coola
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg leading-relaxed mb-6"
            >
              Zapraszamy do Klubu Coola na kręgle, bilard, dartsy, piłkarzyki.
              Nasz klub to idealne miejsce na spędzenie czasu w gronie
              przyjaciół lub rodziny. Oferujemy profesjonalne tory do kręgli,
              stoły bilardowe oraz inne gry zręcznościowe, które zapewnią
              rozrywkę dla osób w każdym wieku.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <Button variant="outline" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Zarezerwuj
              </Button>
            </motion.div>

            {/* Quick Info Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <div className="bg-avangarda/10 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="h-5 w-5 text-avangarda" />
                  <h3 className="font-medium">Godziny otwarcia</h3>
                </div>
                <p className="text-sm">Poniedziałek – Piątek: 16:00 – 22:00</p>
                <p className="text-sm">Sobota - Niedziela: 10:00 – 22:00</p>
              </div>
              <div className="bg-avangarda/10 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="h-5 w-5 text-avangarda" />
                  <h3 className="font-medium">Rezerwacje</h3>
                </div>
                <p className="text-sm">Tel: 29 752 50 34 (recepcja hotelu)</p>
                <p className="text-sm">coola@hotelavangarda.pl</p>
              </div>
            </motion.div>
          </div>

          {/* Main Featured Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative aspect-[4/3] w-full overflow-hidden"
          >
            <Image
              src="/klub/klub-01.JPG"
              alt="Klub Nocny - wnętrze"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
            <div className="absolute bottom-4 left-4 right-4">
              <Badge className="bg-avangarda/100 text-white border-none mb-2">
                Zapraszamy na kręgle
              </Badge>
              <h2 className="text-white text-xl font-semibold">
                Niezapomniane chwile w dobrym towarzystwie
              </h2>
            </div>
          </motion.div>
        </div>

        {/* Image Grid Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px flex-1 bg-gray-200"></div>
            <h2 className="text-2xl font-semibold text-center">
              Galeria Klubu
            </h2>
            <div className="h-px flex-1 bg-gray-200"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Image 2 - Larger */}
            <div className="md:col-span-2 relative aspect-[16/9] overflow-hidden">
              <Image
                src="/klub/klub-02.JPG"
                alt="Bilard"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-end p-4">
                <p className="text-white font-medium">Bilard</p>
              </div>
            </div>

            {/* Image 3 */}
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/klub/klub-03.JPG"
                alt="Inne gry"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-end p-4">
                <p className="text-white font-medium">Gry</p>
              </div>
            </div>

            {/* Image 4 */}
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/klub/klub-04.JPG"
                alt="Bowling"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-end p-4">
                <p className="text-white font-medium">Kręgle</p>
              </div>
            </div>

            {/* Image 1 - Larger */}
            <div className="md:col-span-2 relative aspect-[16/9] overflow-hidden">
              <Image
                src="/klub/klub-01.JPG"
                alt="Bowling"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-end p-4">
                <p className="text-white font-medium">Kręgielnia</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Pricing Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px flex-1 bg-gray-200"></div>
            <h2 className="text-2xl font-semibold text-center">Cennik</h2>
            <div className="h-px flex-1 bg-gray-200"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-avangarda/10 p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-4 text-avangarda">
                KRĘGLE
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex justify-between">
                  <span>Poniedziałek – Czwartek</span>
                  <span className="font-medium">30 zł/1 tor/1h</span>
                </li>
                <li className="flex justify-between">
                  <span>Piątek</span>
                  <span className="font-medium">65 zł/1 tor/1h</span>
                </li>
                <li className="flex justify-between">
                  <span>Sobota do 16:00</span>
                  <span className="font-medium">50 zł/1 tor/1h</span>
                </li>
                <li className="flex justify-between">
                  <span>Sobota od 16:00</span>
                  <span className="font-medium">65 zł/1 tor/1h</span>
                </li>
                <li className="flex justify-between">
                  <span>Niedziela i święta</span>
                  <span className="font-medium">50 zł/1 tor/1h</span>
                </li>
              </ul>
              <Button className="mt-6 bg-avangarda hover:bg-avangarda/90">
                Zarezerwuj tor
              </Button>
            </div>

            <div className="bg-avangarda/10 p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-4 text-avangarda">
                BILARD
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex justify-between">
                  <span>Poniedziałek – Czwartek</span>
                  <span className="font-medium">15 zł/1h</span>
                </li>
                <li className="flex justify-between">
                  <span>Piątek – Niedziela</span>
                  <span className="font-medium">18 zł/1h</span>
                </li>
              </ul>
              <div className="mt-6">
                <h4 className="font-medium mb-2">INNE ATRAKCJE</h4>
                <p className="text-gray-700">
                  Darts, piłkarzyki, cymbergaj – na monety
                </p>
              </div>
              <Button className="mt-6 bg-avangarda hover:bg-avangarda/90">
                Zarezerwuj stół
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px flex-1 bg-gray-200"></div>
            <h2 className="text-2xl font-semibold text-center">Co oferujemy</h2>
            <div className="h-px flex-1 bg-gray-200"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-avangarda/10 p-6 rounded-lg">
              <Music className="h-10 w-10 text-avangarda mb-4" />
              <h3 className="text-xl font-medium mb-2">Kręgle</h3>
              <p className="text-gray-600 leading-relaxed">
                Profesjonalne tory do kręgli dla początkujących i zaawansowanych
                graczy. Idealne na spotkania towarzyskie, imprezy firmowe czy
                rodzinne wyjścia.
              </p>
            </div>

            <div className="bg-avangarda/10 p-6 rounded-lg">
              <Users className="h-10 w-10 text-avangarda mb-4" />
              <h3 className="text-xl font-medium mb-2">Bilard</h3>
              <p className="text-gray-600 leading-relaxed">
                Wysokiej jakości stoły bilardowe dla miłośników tej klasycznej
                gry. Doskonała rozrywka zarówno dla amatorów, jak i bardziej
                doświadczonych graczy.
              </p>
            </div>

            <div className="bg-avangarda/10 p-6 rounded-lg">
              <Calendar className="h-10 w-10 text-avangarda mb-4" />
              <h3 className="text-xl font-medium mb-2">Gry zręcznościowe</h3>
              <p className="text-gray-600 leading-relaxed">
                Darts, piłkarzyki i cymbergaj na monety. Różnorodność gier
                zapewni rozrywkę dla każdego, niezależnie od wieku i
                preferencji.
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-r from-pink-500 to-avangarda p-8 rounded-lg text-white text-center"
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Zarezerwuj swój czas w Klubie Coola już dziś!
          </h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Spędź niezapomniane chwile z przyjaciółmi lub rodziną. Zadzwoń do
            recepcji hotelu pod numer 29 752 50 34 i zarezerwuj tor do kręgli
            lub stół bilardowy.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-avangarda hover:bg-gray-100"
            >
              Zadzwoń teraz
            </Button>
          </div>
        </motion.div>
      </div>
    </Container>
  );
}
