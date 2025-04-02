
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Partners = () => {
  const partners = [
    {
      id: 1,
      name: "Ediconsult",
      logo: "/lovable-uploads/a58dedb2-4a8f-46ba-9d75-0e2261f8bcd4.png",
    },
    {
      id: 2,
      name: "Futurae+",
      logo: "/lovable-uploads/7778e135-81fd-4eee-b332-bb4e72cfa77e.png",
    },
    {
      id: 3,
      name: "Innovation Garage",
      logo: "/lovable-uploads/57b64ade-703b-432d-b618-bec0da0f36c1.png",
    },
    {
      id: 4,
      name: "Endow",
      logo: "/lovable-uploads/8754bd2d-ffc1-4724-9ac3-6d4947b9804d.png",
    },
    {
      id: 5,
      name: "PM&P",
      logo: "/lovable-uploads/9033c787-e922-4e11-984a-54b409d2113d.png",
    },
  ];

  return (
    <section id="associati" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="section-title">I Nostri Associati</h2>
          <p className="section-subtitle">
            Un network di eccellenze che collaborano per il successo comune
          </p>
        </div>
        
        <div className="mt-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {partners.map((partner) => (
                <CarouselItem key={partner.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <div className="p-1">
                    <div className="rounded-lg overflow-hidden border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow p-4 h-full flex flex-col justify-center">
                      <AspectRatio ratio={16/9} className="bg-white flex items-center justify-center">
                        <img
                          src={partner.logo}
                          alt={partner.name}
                          className="object-contain w-full h-full p-4"
                        />
                      </AspectRatio>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="relative static mx-2 bg-white hover:bg-gray-50" />
              <CarouselNext className="relative static mx-2 bg-white hover:bg-gray-50" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Partners;
