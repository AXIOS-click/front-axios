export const createWhatsAppLink = (productTitle: string, e: any) => {
    e.preventDefault();
    let whatsAppLink: string = `https://wa.me/593968544194?text=`;
    whatsAppLink += `%2ABuenos%20días,%20me%20gustaría%20cotizar%20el%20siguiente%20producto:%2A%0A%0A`;
    whatsAppLink += `%2AProducto:%2A%20${productTitle}%0A`;
    window.open(whatsAppLink, '_blank');
}