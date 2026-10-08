// Shared by the Premium and Superior room screens.
// icon-hotel-* classes need css/custom-icons/fonts/hotel.woff (missing), so the customicon-* equivalents are used.
import type { RoomFeature } from '../components/RoomIntro'
import type { Facility } from '../components/FacilityCard'

export type RoomInfo = {
  name: 'Premium' | 'Superior'
  count: number
  tariff: string
  path: string
}

export const premium: RoomInfo = { name: 'Premium', count: 6, tariff: '₹3,499', path: '/premium-room' }
export const superior: RoomInfo = { name: 'Superior', count: 2, tariff: '₹2,499', path: '/superior-room' }

// Right-hand "Room Information" list on the room detail pages.
export function roomInformation({ name, count, tariff }: RoomInfo): RoomFeature[] {
  return [
    { icon: 'customicon-double-bed', label: `Room Category: ${name}` },
    { icon: 'bi bi-door-open', label: `Rooms in This Category: ${count}` },
    { icon: 'bi bi-people', label: 'Occupancy: 2 to 3 guests' },
    { icon: 'bi bi-tag', label: `Listed Tariff: ${tariff}` },
    { icon: 'bi bi-cup-hot', label: 'Stay Inclusions: Breakfast, free Wi-Fi and parking' },
  ]
}

// "Your stay includes" cards (identical for both categories).
export const stayInclusions: Facility[] = [
  { icon: 'customicon-double-bed', title: 'Comfortable Accommodation', text: 'A restful place to return to after your day in Kaziranga. Confirm the precise room layout and bedding arrangement for your group before booking.' },
  { icon: 'customicon-breakfast', title: 'Breakfast Included', text: 'Begin your day with breakfast included in the listed stay plan. Ask the team about the breakfast service arrangements for your dates.' },
  { icon: 'customicon-wifi', title: 'Complimentary Wi-Fi', text: 'Stay connected with free Wi-Fi during your stay at the property.' },
  { icon: 'customicon-private-parking', title: 'Parking', text: 'Parking is available for guests arriving by road.' },
]

// rooms/opt_*.jpg (gallery) are not in the project yet, so the existing room photos stand in for them.
export const roomGalleryImages = [`${import.meta.env.BASE_URL}img/rooms/1.jpg`, `${import.meta.env.BASE_URL}img/rooms/2.jpg`, `${import.meta.env.BASE_URL}img/rooms/3.jpg`, `${import.meta.env.BASE_URL}img/rooms/2.jpg`]
