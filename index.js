const Notification = (props) => {
  //  Write your code here.
  const { name, icon_url, bg_styles } = props;
  return (
    <div className={bg_styles}>
      <img src={icon_url} className="icon-styles" />
      <p className="heading-styles">{name}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div class="bg-container">
    <h1 className="main-heading">Notifications</h1>
    <div className="notifications-container">
      <Notification
        name="Information Message"
        icon_url="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        bg_styles="bg-color-1 notification-container"
      />
      <Notification
        name="Success Message"
        icon_url="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        bg_styles="bg-color-2 notification-container"
      />
      <Notification
        name="Warning Message"
        icon_url="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        bg_styles="bg-color-3 notification-container"
      />
      <Notification
        name="Error Message"
        icon_url="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        bg_styles="bg-color-4 notification-container"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
