import ko = require("knockout");
import vmClickToEdit = require("components/click-to-edit");

export function registerClicktoEdit() {
    ko.components.register("click-to-edit", {
        //viewModel: { require: "components/click-to-edit" },
        viewModel: {
            createViewModel: (params, componentInfo) => {
                //var par = <vmClickToEdit.clickToEditParams>params.value;
                return new vmClickToEdit.ClickToEditViewModel(params);
            }
        },
        template: { require: "text!components/click-to-edit.html" }
    });
}
// register the component
