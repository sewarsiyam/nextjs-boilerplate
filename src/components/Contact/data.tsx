export default function dataContactSection() {
    const contactInfo = [
      {
        icon: (
          <svg className="w-6 h-6" viewBox="0 0 28 24" fill="none">
            <path d="M21.6421 8.14793L15.8752 12.5621C14.7838 13.3756 13.2539 13.3756 12.1626 12.5621L6.34616 8.14793M7.60845 1H20.3551C22.193 1.0196 23.9423 1.75826 25.1956 3.04395C26.4488 4.32964 27.0967 6.05013 26.9883 7.80473V16.1953C27.0967 17.9499 26.4488 19.6704 25.1956 20.9561C23.9423 22.2417 22.193 22.9804 20.3551 23H7.60845C3.66071 23 1 19.9467 1 16.1953V7.80473C1 4.05325 3.66071 1 7.60845 1Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
        title: "E-mail:",
        value: "info@sadeim.com",
        link: "mailto:info@sadeim.com"
      },
      {
        icon: (
          <svg className="w-6 h-6" viewBox="0 0 30 29" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M1.63175 4.16049C2.09306 3.42259 4.63471 0.738642 6.44846 0.819667C6.99064 0.863073 7.46991 1.17994 7.85932 1.54744C8.75347 2.39097 11.3131 5.58132 11.4584 6.25267C11.8118 7.89921 9.78091 8.84836 10.4025 10.5079C11.9871 14.2539 14.7174 16.8915 18.5966 18.4209C20.313 19.0213 21.2955 17.0594 22.9999 17.4023C23.6933 17.5426 26.9973 20.0153 27.8705 20.8791C28.2494 21.2538 28.5789 21.7183 28.6239 22.242C28.6913 24.0868 25.7407 26.5769 25.1656 26.8952C23.8087 27.8328 22.0384 27.8168 19.8801 26.8474C13.8577 24.4268 4.23331 15.3043 1.68118 9.2665C0.704658 7.19314 0.63726 5.47136 1.63175 4.16049Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
        title: "Phone:",
        value: "+1 (773) 814-9061",
        link: "tel:+1 (773) 814-9061"
      },
      {
        icon: (
          <svg className="w-6 h-6" viewBox="0 0 27 30" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M1.71198 12.8951C1.73479 6.40852 7.19626 1.16797 13.9105 1.19001C20.6248 1.21205 26.0493 6.48833 26.0265 12.9749V13.1079C25.9439 17.3244 23.5069 21.2217 20.5192 24.2677C18.8106 25.9818 16.9025 27.4994 14.833 28.7901C14.2796 29.2525 13.4588 29.2525 12.9055 28.7901C9.82033 26.8501 7.11262 24.4008 4.90618 21.5542C2.93961 19.0719 1.82307 16.0591 1.71198 12.935L1.71198 12.8951Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
        title: "Our Locations:",
        locations: [
          {
            address: "Chicago , USA",
          },
          {
            address: "Saudi Arabia",
          }
        ]
      }
    ];
  
    return (
      <>
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <div key={index}>
                  <h3 className="text-gray-500 mb-2 flex items-center gap-2">
                    {info.icon}
                    <span>{info.title}</span>
                  </h3>
  
                  {info.value && info.link ? (
                    <a
                      href={info.link}
                      className="text-xl font-semibold hover:text-gray-700 transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : info.locations ? (
                    <div className="space-y-2">
                      {info.locations.map((location, idx) => (
                        <p key={idx} className="text-xl font-semibold">
                          {location.address}
                        </p>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>

      </>
    );
  }