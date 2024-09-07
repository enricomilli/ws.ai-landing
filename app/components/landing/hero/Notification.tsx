import { heroNotificationImages, HeroContent } from "@/constants/constants";

const Notification = (props: { className: string, title: string }) => {
  const { className, title } = props;
  return (
    <div
      className={`${className} z-10 flex items-center p-4 pr-6 bg-secondary/70 backdrop-blur border border-secondary/40 shadow-xl rounded-2xl gap-5`}>
      <img
        src={HeroContent.linkedIn}
        alt="LinkedIn Icon"
        className="w-16 h-16"
      />
      <div className="flex-1">
        <h6 className="mb-1 font-semibold text-primary">{title}</h6>
        <div className="flex items-center justify-between">
          <ul className="flex -m-1">
            {heroNotificationImages.map((item, index) => (
              <li
                key={index}
                className="flex w-6 h-6 border-2 border-primary-foreground rounded-full overflow-hidden">
                <img
                  src={item}
                  className="w-[20px] h-auto"
                  alt={item}
                />
              </li>
            ))}
          </ul>
          <div className="body-2 text-primary">1m ago</div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
