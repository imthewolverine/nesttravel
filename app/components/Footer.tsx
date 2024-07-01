
export default function Footer() {

  return (
        <div className="bg-[#162346] text-white mx-auto mt-10 px-4">
            <div className="mx-6 py-10 text-center md:text-left max-w-screen-lg min-[1537px]:max-w-screen-xl mx-auto">
              <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <div className="">
                  <h6
                    className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
                    Nest travel
                  </h6>
                  <div>
                    Here you can use rows and columns to organize your footer
                    content. Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit.
                  </div>
                </div>
                <div>
                  <h6
                    className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                    Products
                  </h6>
                  <div className="mb-4">
                    <a href="#!">Angular</a>
                  </div>
                  <div className="mb-4">
                    <a href="#!">React</a>
                  </div>
                  <div className="mb-4">
                    <a href="#!">Vue</a>
                  </div>
                  <div>
                    <a href="#!">Laravel</a>
                  </div>
                </div>
                <div>
                  <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                    Useful links
                  </h6>
                  <div className="mb-4">
                    <a href="#!">Pricing</a>
                  </div>
                  <div className="mb-4">
                    <a href="#!">Settings</a>
                  </div>
                  <div className="mb-4">
                    <a href="#!">Orders</a>
                  </div>
                  <div>
                    <a href="#!">Help</a>
                  </div>
                </div>
                <div>
                  <h6
                    className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                    Contact
                  </h6>
                  <div className="mb-4 flex items-center justify-center md:justify-start">
                    New York, NY 10012, US
                  </div>
                  <div className="mb-4 flex items-center justify-center md:justify-start">
                    info@example.com
                  </div>
                  <div className="mb-4 flex items-center justify-center md:justify-start">
                    + 01 234 567 88
                  </div>
                  <div className="flex items-center justify-center md:justify-start">
                    + 01 234 567 89
                  </div>
                </div>
                </div>
            </div>
            <div className="w-full max-w-screen-xl flex justify-between mx-auto p-2 text-white">
                <div>2024он Nest Travel</div>
                <div>© Зохиогчийн эрх хуулиар хамгаалагдсан.</div>
            </div>
        </div>
    );
}