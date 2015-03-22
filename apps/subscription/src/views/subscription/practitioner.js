define(
['jquery', 'underscore', 'backbone', 'backbone-validation', 'stickit', 'models/subscription/practitioner', 'templates'],
function($, _, Backbone, BackboneValidation, stickit, SignUpModel, templates) {

        var signupModel = new SignUpModel.PractitionerSignUpModel();

        BackboneValidation.configure({
            forceUpdate: true
        });

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

    return Backbone.View.extend({

 	    template: templates['subscription/practitioner.html'],

        events: {
	       'click .personalNext': 'personalNext',
	       'click .proffessionalNext': 'proffessionalNext',
	       'click .personalBack': 'personalBack',
	       'click .securityBack': 'securityBack',
           'click #signUpButton': function (e) {
                e.preventDefault();
                this.signUp();
            }
    	},

        bindings: {
            '[name=firstName]': {
                observe: 'firstName',
                setOptions: {
                    validate: true
                }
            },
            '[name=lastName]': {
                observe: 'lastName',
                setOptions: {
                    validate: true
                }
            },
            '[name=middleName]': {
                observe: 'middleName',
                setOptions: {
                    validate: true
                }
            },
            '[name=licenseNumber]': {
                observe: 'licenseNumber',
                setOptions: {
                    validate: true
                }
            },            
            '[name=username]': {
                observe: 'username',
                setOptions: {
                    validate: true
                }
            },
            '[name=email]': {
                observe: 'email',
                setOptions: {
                    validate: true
                }
            },
            '[name=password]': {
                observe: 'password',
                setOptions: {
                    validate: true
                }
            },            
            '[name=confirmPassword]': {
                observe: 'confirmPassword',
                setOptions: {
                    validate: true
                }
            },
            '[name=terms]': {
                observe: 'terms',
                setOptions: {
                    validate: true
                }
            }
        },

        initialize: function(){
            BackboneValidation.bind(this, {
              model: signupModel
            });
        },
    
        render: function() {
            this.$el.html(this.template());
            this.$securityInfo = this.$('#security-info');
            this.$personalInfo = this.$('#personal-info');
            this.$proffessionalInfo = this.$('#proffessional-info');
            this.securityVisible();
            this.stickit();
            return this;
        },

    	securityVisible: function() {
    		this.$securityInfo.fadeIn("slow");
      		this.$personalInfo.hide();
      		this.$proffessionalInfo.hide();
    	},

    	personalVisible: function() {
      		this.$securityInfo.hide();
      		this.$personalInfo.fadeIn("slow");
      		this.$proffessionalInfo.hide();
    	},

    	proffessionalVisible: function() {
      		this.$securityInfo.hide();
      		this.$personalInfo.hide();
      		this.$proffessionalInfo.fadeIn("slow");
    	},

    	personalNext: function() {
            this.personalVisible(); 
             
    		
    	},

    	proffessionalNext: function() {
    		this.proffessionalVisible();
    	},

    	personalBack: function() {
    		this.personalNext();
    	},

    	securityBack: function() {
    		this.securityVisible();
    	},
        signUp: function () {         
                // this.model.save();
                alert('Great Success!');
        },   
        remove: function() {
            BackboneValidation.unbind(this);
            return Backbone.View.prototype.remove.apply(this, arguments);
        }
    });
});