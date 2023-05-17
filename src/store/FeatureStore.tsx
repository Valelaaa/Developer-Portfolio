import {types} from "mobx-state-tree";
import {AddedMyWork, featuredPortfolio} from "../data.ts";

const AddedMyWork = types.model({
    id: types.number,
    title: types.string,
    img: types.string,
    link: types.string
})
const FeatureStore = types.model("Feature", {
    featuredPortfolio: types.array(AddedMyWork),
})
    .actions(self => ({
        setItems: action(function(){
            if (localStorage.getItem('features')){
                self.featuredPortfolio = JSON.parse(localStorage.getItem('features'));
                return
            }
            localStorage.setItem('features', JSON.stringify(featuredPortfolio))
            self.featuredPortfolio = JSON.parse(localStorage.getItem('features'))
        }),
        createNewItem:action(function(item: AddedMyWork){
            self.featuredPortfolio.push(item);
            localStorage.setItem('features',JSON.stringify(self.featuredPortfolio))
        }),

        deleteItem: action(function (id: number){
            self.featuredPortfolio = self.featuredPortfolio.filter((e) => e.id !== id);
            localStorage.setItem('features', JSON.stringify(self.featuredPortfolio));
        })
    }));
export default FeatureStore.create();