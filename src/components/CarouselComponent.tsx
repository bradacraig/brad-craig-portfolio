import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

export default function CarouselComponent() {
  return (
    <Carousel className=''>
      <CarouselContent>
        <CarouselItem>
          <img
            src="TripHive/Screenshots/triphive.pushed.nz_my-trips.png"
            alt="my trips page"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            src="TripHive/Screenshots/triphive.pushed.nz_schedule.png"
            alt="schedule page"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            src="TripHive/Screenshots/triphive.pushed.nz_events.png"
            alt="events page"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            src="TripHive/Screenshots/triphive.pushed.nz_profile.png"
            alt="profile page"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            src="TripHive/Screenshots/triphive.pushed.nz_friends.png"
            alt="friends page"
          />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
