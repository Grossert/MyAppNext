
interface Props {
    children: React.ReactNode
}

export default function ImageBackground({ children }: Props) {
    return (
        <section className="bg-cover bg-center h-screen w-screen bg-[url('./images/imagem1.png')]">
            {children}
        </section>
    );
}
