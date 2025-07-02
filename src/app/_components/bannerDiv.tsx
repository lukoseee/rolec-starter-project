type BannerProps = {
        children: React.ReactNode;
        image: string;
        height?: string;
        positioning?: string;
    };


export const HoverBanner = ({children, image ="", height="", positioning} : BannerProps) =>
(
        <div className = {`relative overflow-hidden rounded-b-3xl ${height}`}>
            <div style={{ backgroundImage: `url(${image})` }} className = "absolute inset-0 bg-cover bg-[position:30%_39%] rounded-b-3xl transition-transform duration-500 hover:scale-110">
                <div className = {`flex ${positioning}  absolute inset-0 bg-black/50 rounded-b-3xl opacity-100 lg:opacity-0  lg:hover:opacity-100 `}> 
                    <h1 className = "font-extrabold text-3xl lg:text-6xl text-white">{children}</h1>
                </div>
            </div>
        </div>
)
