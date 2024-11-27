import { Badge } from "@/components/UI/Badges/Badge/Badge.tsx";

interface SectionProps {
    type: 'imgLeft' | 'imgRight';
    title?: string;
    badges?: string [];
    description?: string [];
    img: any;
    className: string;
    id?: string;
    children?: React.ReactNode;
}

export const Section = ({ 
    type,
    title,
    badges,
    description,
    img,
    className,
    id,
    children,
    ...otherProps 
}: SectionProps) => {

    //const imgSrc = useImageLoader(img.src)

    return (
        <>
        {type === 'imgLeft' && (
            <section id={id} className={className + ' leftSection'} {...otherProps}>
                    
                    <img
                        className="flex section-img"
                        src={img.src}
                        alt={img.alt || ''} 
                    />

                    <div className="pageRight">

                        {title && (
                            <h2 
                                className="section-title"
                            >{title}</h2>
                        )}

                        {badges && (
                            <div className="badges">
                            {badges && badges.map((badge, index) => {
                                let targetId = ++index

                                if (badges.length === 1) {
                                    targetId = 0
                                }

                                return (<Badge
                                    targetId={targetId.toString()}
                                    key={index}
                                >{badge}</Badge>)
                            })}
                            </div>
                    )}

                    
                        {description && description.map((item, index) => (
                            <p 
                                key={index}
                            >{item}</p>
                        ))}

                        {children}
                    </div>
            </section>
        )}

        {type === 'imgRight' && (
            <section id={id} className={className + ' rightSection'} {...otherProps}>
                <div className="pageLeft">
                    {title && (
                        <h2 
                            className="section-title"
                    >{title}</h2>)}

                    {badges && (
                        <div className="badges">
                            {badges.map((badge, index) => {
                                let targetId = ++index

                                if (badges.length === 1) {
                                    targetId = 0
                                }

                                return (<Badge
                                    targetId={targetId.toString()}
                                    key={index}
                                >{badge}</Badge>)
                            })}
                        </div>
                    )}

                    {description && description.map((item, index) => (
                        <p 
                            key={index}
                        >{item}</p>
                    ))}

                    {children}
                </div>

                <img
                    className="flex section-img"
                    src={img.src}
                    alt={img.alt || ''} 
                />
            </section>
        )}
        </>
    );
};