 define(['backbone', 'backbone-validation'], function (Backbone, BackboneValidation) {


     var PractitionerSignUpModel = Backbone.Model.extend({
        defaults: {
            country: 'Uganda'
        },
        validation: {
            firstName: {
                required: true
            },

            lastName: {
                required: true
            },       

            middleName: {
                required: true
            }, 
            licenseNumber: {
                required: true
            }, 
            email: {
                required: true,
                pattern: 'email'
            },
            password: {
                minLength: 8
            },
            confirmPassword: {
                equalTo: 'password',
                msg: 'The passwords does not match'
            },
            terms: {
                acceptance: true
            }
        }
    });

    return {
        PractitionerSignUpModel: PractitionerSignUpModel
    }
});