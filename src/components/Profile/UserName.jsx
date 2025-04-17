import stylesProfile from "./Profile.module.css";

export default function UserName({ name, tag, location, image }) {
  return (
    <div className={stylesProfile.profileTop}>
      <img className={stylesProfile.avatar} src={image} alt="User avatar" />
      <p className={stylesProfile.name}>{name}</p>
      <p className={stylesProfile.tag}>@{tag}</p>
      <p className={stylesProfile.location}>{location}</p>
    </div>
  );
}
