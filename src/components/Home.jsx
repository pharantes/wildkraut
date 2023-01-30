import React from "react";

export default function Home() {
  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        <div className="row d-flex">
          <div className="col-lg-6">
            <h2 className="mb-5">Brand Name</h2>
            <h4>Some subtitle</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque lacinia velit metus, non malesuada ex gravida nec.
              Pellentesque varius laoreet urna, id sagittis dui vehicula nec.
              Nunc vel lectus justo. Nam accumsan laoreet mauris eget
              vestibulum. Cras pharetra nec dui vel tincidunt. Sed eleifend,
              dolor id semper vestibulum, mi leo bibendum nisi, id iaculis magna
              velit a orci. Donec ac cursus quam. In et dui rutrum, aliquet quam
              vel, ornare odio. Pellentesque habitant morbi tristique senectus
              et netus et malesuada fames ac turpis egestas. Pellentesque porta
              ac velit vel gravida. Maecenas non dui ante. In scelerisque libero
              et nulla condimentum posuere. Maecenas vitae ipsum sit amet orci
              iaculis consectetur nec at ex. Aenean tristique urna eget nunc
              tristique consectetur vel vel nibh. Nam iaculis, nisl nec
              sollicitudin efficitur, felis lorem finibus odio, maximus
              condimentum neque tortor eget neque. Etiam lacus nisi, imperdiet
              in efficitur at, lacinia sit amet dolor. Ut eget vehicula orci, eu
              tempor ex. Nam quis volutpat diam.
            </p>
          </div>
          <div className="col-lg-6 ">
            <img
              src="https://images.unsplash.com/photo-1599619585752-c3edb42a414c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MjE4M3wwfDF8c2VhcmNofDN8fHJlbm92YXRpb258ZW58MHx8fHwxNjc1MDc3MDM2&ixlib=rb-4.0.3&q=80&w=1080"
              alt="renovation site"
              className="w-100"
              style={{
                borderRadius: "6px",
              }}
            />
          </div>
        </div>
      </div>
      <div className="container-fluid py-5 bg-light">
        <div className="container py-5">
          <div className="row">
            <h2 className="mb-5 text-center">Services</h2>
            <div className="col-lg-3">Col 1</div>
            <div className="col-lg-3">Col 2</div>
            <div className="col-lg-3">Col 3</div>
            <div className="col-lg-3">Col 4</div>
          </div>
        </div>
      </div>
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="row">
            <h2 className="mb-5 text-center">Something else</h2>
            <div className="col-lg-4">Col 1</div>
            <div className="col-lg-4">Col 2</div>
            <div className="col-lg-4">Col 3</div>
          </div>
        </div>
      </div>
    </div>
  );
}
