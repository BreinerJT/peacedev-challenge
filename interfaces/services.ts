export type ServiceTitle = 'About us' | 'Terms & Conditions' | 'FAQ' | 'Privacy Policy' | 'E-waste Policy' | 'Cancellation & Return Policy'

export interface Service {
  title: ServiceTitle
  href: string
}