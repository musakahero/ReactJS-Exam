import { useContext } from "react"
import { CatalogItem } from "./CatalogItem"
import { ItemContext } from "../../contexts/ItemContext"

export const Catalog = () => {
    const { items } = useContext(ItemContext); 
    return (
        <section>
            <h3>Browse items</h3>
            <div id="catalog-box" style={{ display: "grid", "gridTemplateColumns": "1fr 1fr 1fr", "alignItems": "start", "justifyItems":"center" }}>
                {items.map(i => <CatalogItem key={i._id} {...i} />)}
            </div>

        </section>

    )
}