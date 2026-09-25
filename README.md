# photo-grid
Interactive photo navigation grid
I built this component to incorporate photos into our campus ministry navigation. The goal was to create a clean, visual navigation experience that helps people quickly scan a large number of ministries and easily find the one that's right for them—all in a warm, engaging way.

Features

Desktop Hover Effect: Photos transition from grayscale to full color on hover.
Mobile Scroll Effect: As you scroll, the photo closest to the center of the screen transitions from grayscale to full color, creating a subtle interactive effect.
Responsive Card Heights: Each card automatically adjusts its height based on its content. This allows individual cards to contain more information without breaking the overall grid layout. We use this for our non-English-speaking campuses, where some ministries don't yet have dedicated landing pages, allowing us to include ministry details and contact information directly within the card.
Required Content Component Item Attributes (There's nothing special about the names, it's just how our website was originally set up)

Image – The background image for the card.
LinkOne – The destination URL for the button.
LinkOneText – The button label.
LinkOneNewWindow – Field Type: Check List; Value: Yes. – Opens the link in a new window when selected.
It also uses Title and Content
