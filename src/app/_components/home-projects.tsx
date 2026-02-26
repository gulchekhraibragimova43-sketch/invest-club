import { projectsMock } from "@/mocks/projects.mock";
import { HomeProject } from "./home-product";
import { HomeProjectsFilter } from "./home-products-filter";

export const HomeProjects = () => {
    return <section className="px-42.25 pt-30.5 pb-30">
        <div className="flex">
            {/* FILTER */}

            <div className="w-115">
                <HomeProjectsFilter />
            </div>

            {/* PRODUCTS */}
            <div className="flex-1 grid grid-cols-2">
                {
                    projectsMock.map(pr => <HomeProject key={pr.id} {...pr} />)
                }
            </div>
        </div>
    </section>
}