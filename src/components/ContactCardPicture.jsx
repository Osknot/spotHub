export const ContactCardPicture = ({src, name, about}) => {
    return(
        <>
            <img src={src} alt="contact picture" />
            <h2>Meet {name}</h2>
            <p>{about}</p>
        </>

    )
}
