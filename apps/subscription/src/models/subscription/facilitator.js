//AMD loading of modules and dependencies using Requirejs
define(['underscore', 'backbone', 'backbone-validation'], function (_, Backbone, BackboneValidation) {
    // Since we are automatically updating the model, we want the model
    // to also hold invalid values, otherwise, we might be validating
    // something else than the user has entered in the form.
    BackboneValidation.configure({
        forceUpdate: true
    });

    // Extend the callbacks to work with Bootstrap,  
    _.extend(BackboneValidation.callbacks, {
        valid: function (view, attr, selector) {
            var $el = view.$('[name=' + attr + ']'), 
                $group = $el.closest('.form-group');
            
            $group.removeClass('has-error');
            $group.find('.help-block').html('').addClass('hidden');
        },
        invalid: function (view, attr, error, selector) {
            var $el = view.$('[name=' + attr + ']'), 
                $group = $el.closest('.form-group');
            
            $group.addClass('has-error');
            $group.find('.help-block').html(error).removeClass('hidden');
        }
    });
        
    // Define  SignUpModel with some validation rules
    var SignUpModel = Backbone.Model.extend({
        url: "http://localhost:3000/subscribe/facilitator",
        
        parse: function(response) {
        return response;
        },

        constructor: function (attributes, options) {
             Backbone.Model.apply(this, arguments);
        },

        idAttribute: '_id',
        defaults: {
            idAttribute: null,
            admin_sex: 'Male',
            admin_nationality: 'Ugandan',
            admin_experience: 'Below 5 years',
            admin_Country: 'Uganda',
            admin_state: 'Kampala',
            admin_City: 'Kampala',
            ageOfCompany: '1',
            Country: 'Uganda',
            state: 'Kampala',
            city:'Kampala'
        },
        validation: {
            companyName: {
                required: true,
                minLength: 3

            },
            companyTin: {
                required: true,
                minLength: 3,
                range: [9, 100]
            },
            regNo: {
                required: true,
                minLength: 3
            },
            ownersTitle: {
                required: true,
                minLength: 3
            },
            firstName: {
                required: true,
                minLength: 3
            },
            lastName: {
                required: true,
                minLength: 3
            },
            middleName: {
                required: true,
                minLength: 3
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
            },
            admin_firstName: {
                required: true,
                minLength: 3
            },
            admin_lastName: {
                required: true,
                minLength: 3
            },
            admin_middleName: {
                required: true,
                minLength: 3
            },
            admin_age: {
                required: false,
                range: [18, 100]
            },
            admin_sex: {
                oneOf: ['Male', 'Female']
            },
            admin_nationality: {
              oneOf: ['Ugandan', 'Kenyan', 'Tanzanian', 'Rwandanese', 'Burundian']
            },
            admin_experience: {
              oneOf: ['Below 5 years', '5-10 years', '10-25 years']
            },
            admin_Country: {
                required:true,
                oneOf: ['Uganda', 'Kenya', 'Tanzania', 'Rwanda', 'Burundi']
            },
            admin_zipCode: {
                required: true,
                minLength: 3
            },
            admin_state: {
                required: true,
                oneOf: ['Arizona', 'Florida', 'Ohio', 'Los Angele','California']
            },
            admin_streetLine1: {
                required: false
            },
            admin_city: {
                required: false,
                oneOf: ['Kampala', 'Nairobi', 'Arusha', 'Kigali', 'Juba']
            },
            admin_streetLine2: {
                required: false
            },
            admin_areaCode: {
                required: false
            },
            admin_postalCode: {
                required: false
            },
            admin_email: {
                required: false,
                pattern: 'email'
            },
            admin_mobiCode1: {
                required: true,
                minLength: 3
            },
            admin_mobiCode2: {
                required: true,
                minLength: 3
            },
            admin_mobiCode3: {
                required: true,
                minLength: 6
            },
            admin_homeCode1: {
                required: false,
                minLength: 3
            },
            admin_homeCode2: {
                required: false,
                minLength: 3
            },
            admin_homeCode3: {
                required: false,
                minLength: 6,
            },
            admin_faxCode1: {
                required: true,
                minLength: 3
            },
            admin_faxCode2: {
                required: true,
                minLength: 3
            },
            admin_faxCode3: {
                required: true,
                minLength: 6
            },
            admin_website: {
                required: false,
                minLength: 3
            },
            issuing: {
                required: true,
                minLength: 3
            },
            dateOfIssue: {
                required: true,
                minLength: 3
            },
            dateOfExpiry: {
                required: true,
                minLength: 3
            },
            ageOfCompany: {
                required: true,
                oneOf: ['1', '2', '3','4','5']
            },
            Country: {
                required:true,
                oneOf: ['Uganda', 'Kenya', 'Tanzania', 'Rwanda', 'Burundi']
            },
            zipCode: {
                required: true,
                minLength: 3
            },
            state: {
                required: true,
                oneOf: ['Arizona', 'Florida', 'Ohio', 'Los Angele','California']
            },
            streetLine1: {
                required: false,
                minLength: 3
            },
            city: {
                required: false,
                oneOf: ['Kampala', 'Nairobi', 'Arusha', 'Kigali', 'Juba']
            },
            streetLine2: {
                required: false,
                minLength: 3
            },
            areaCode: {
                required: false,
                minLength: 3
            },
            postalCode: {
                required: false,
                minLength: 3
            },
            website: {
                required: false,
                minLength: 3
            },
            mobiCode1: {
                required: true,
                minLength: 3
            },
            mobiCode2: {
                required: true,
                minLength: 3
            },
            mobiCode3: {
                required: true,
                minLength: 6
            },
            teleCode1: {
                required: true,
                minLength: 3
            },
            teleCode2: {
                required: true,
                minLength: 3
            },
            teleCode3: {
                required: true,
                minLength: 6,
            },
            tele1Code1: {
                required: false,
                minLength: 3
            },
            tele1Code2: {
                required: false,
                minLength: 3
            },
            tele1Code3: {
                required: false,
                minLength: 6
            },
            faxCode1: {
                required: true,
                minLength: 3
            },
            faxCode2: {
                required: true,
                minLength: 3
            },
            faxCode3: {
                required: true,
                minLength: 6
            },
            tourist: {
                required: false,
                minLength: 3
            }
        }
    });
    return {
        SignUpModel: SignUpModel
    } ;  
});