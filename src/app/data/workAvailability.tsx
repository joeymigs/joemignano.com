export type WorkAvailability = {
  status: 'available' | 'unavailable'
  availableFromDate: string
  statusMessage: string
}

export const workAvailability: WorkAvailability = {
  status: 'available',
  availableFromDate: 'July ‘25',
  statusMessage: 'Available for work',
}