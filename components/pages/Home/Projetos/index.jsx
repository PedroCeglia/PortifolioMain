import EstruturaSection from "@/components/Estruturas/EstruturaSection";
import EstruturaLista from "@/components/Estruturas/EstruturaLista";
import { ProjetosContainerStyledComponent } from "./style";
import Link from "next/link";

export default function ProjetosSection() {
    return(
        <EstruturaSection
            idSection={"projetos-section"}
            idChangeSection={"certificados-section"}
        >
            <ProjetosContainerStyledComponent>
                <EstruturaLista
                    title={"Projetos"}
                    type={"Projetos"}
                    max6
                />
                <Link href={"/projetos"} > Ver mais </Link>
            </ProjetosContainerStyledComponent>
        </EstruturaSection>
    )
}