define(["require", "exports", "knockout", "components/click-to-edit"], function (require, exports, ko, vmClickToEdit) {
    "use strict";
    function registerClicktoEdit() {
        ko.components.register("click-to-edit", {
            //viewModel: { require: "components/click-to-edit" },
            viewModel: {
                createViewModel: function (params, componentInfo) {
                    //var par = <vmClickToEdit.clickToEditParams>params.value;
                    return new vmClickToEdit.ClickToEditViewModel(params);
                }
            },
            template: { require: "text!components/click-to-edit.html" }
        });
    }
    exports.registerClicktoEdit = registerClicktoEdit;
});
// register the component
