import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div class="mt-5 pt-5 pb-5 footer">
<div class="container">
  <div class="row row1">
    <div class="col-lg-5 col-xs-12 about-company">
      <h2><text>e</text>Reader</h2>
      <p class="pr-5 text-white-50 headpara">Big ideas in small packages
Start learning now</p>
      <p><a href="#"><i class="fa fa-facebook-square mr-1"></i></a><a href="#"><i class="fa fa-linkedin-square"></i></a></p>
    </div>
    <div class="col-lg-3 col-xs-12 links">
      <h4 class="mt-lg-0 mt-sm-3">Links</h4>
        <ul class="m-0 p-0">
          <li>- <a href="#">Book lists</a></li>
          <li>- <a href="#">About</a></li>
          <li>- <a href="#">Careers</a></li>
          <li>- <a href="#">eReader Magazine</a></li>
          <li>- <a href="#">Pricing</a></li>
          <li>- <a href="#">Contact & Help</a></li>
        </ul>
    </div>
    <div class="col-lg-4 col-xs-12 location">
      <h4 class="mt-lg-0 mt-sm-4">Location</h4>
      <p>22, Lorem ipsum dolor, consectetur adipiscing</p>
      <p class="mb-0"><i class="fa fa-phone mr-3"></i>(541) 754-3010</p>
      <p><i class="fa fa-envelope-o mr-3"></i>info@hsdf.com</p>
    </div>
  </div>
  <div class="row mt-5 cr">
    <div class="col copyright">
      <p class=""><small class="text-white-50">eReader.Inc<br/>© 2019. All Rights Reserved.</small></p>
    </div>
  </div>
</div>
</div>
    )
}

export default Footer
