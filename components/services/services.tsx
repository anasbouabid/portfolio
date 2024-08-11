import "./services.scss"
import Title from "@/components/title/title";
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import CloudRoundedIcon from '@mui/icons-material/CloudRounded';

const Services = () => {
    const services = [
        {
            icon: <LanguageRoundedIcon />,
            title: "Web Development",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum iusto laborum nostrum. " +
                "Consectetur debitis eveniet in iure iusto nisi perspiciatis placeat quaerat rem. Aperiam " +
                "consequuntur dignissimos ex explicabo illum, non?",
        },
        {
            icon: <CloudRoundedIcon />,
            title: "Devops",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum iusto laborum nostrum. " +
                "Consectetur debitis eveniet in iure iusto nisi perspiciatis placeat quaerat rem. Aperiam " +
                "consequuntur dignissimos ex explicabo illum, non?",
        },
        {
            icon: <LanguageRoundedIcon />,
            title: "Web Development",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum iusto laborum nostrum. " +
                "Consectetur debitis eveniet in iure iusto nisi perspiciatis placeat quaerat rem. Aperiam " +
                "consequuntur dignissimos ex explicabo illum, non?",
        },
        {
            icon: <LanguageRoundedIcon />,
            title: "Web Development",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum iusto laborum nostrum. " +
                "Consectetur debitis eveniet in iure iusto nisi perspiciatis placeat quaerat rem. Aperiam " +
                "consequuntur dignissimos ex explicabo illum, non?",
        },
    ]
    return (
        <section className="section" id="services">
            <Title title="My Services"/>
            <h3 className="big-title">What Can I Do ?</h3>

            <div className="flex gap-4">
                {
                    services.map((service) => (
                        <div key={service.title} className="service-item w-3/12">
                            <div className="icon">
                                {
                                    service.icon
                                }
                            </div>
                            <h4>{service.title}</h4>
                            <hr/>
                            <p>{service.description}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Services;