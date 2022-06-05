export type BreweryCardProps = {
  onDelete: VoidFunction
  name: string
  street: string
  city: string
  state: string
  country: string
  breweryType: string
  postalCode: string
  phone: string
  loading?: boolean
}
