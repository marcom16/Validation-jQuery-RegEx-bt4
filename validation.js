$( document ).ready(function() {
	$('#formToValidate').on('submit',function(e){
		e.preventDefault()

		var exp1 = validateName('#fname' ,$("#fname").val())
		var exp2 = validateName('#lname' ,$("#lname").val())
		var exp3 = validateEmail('#email' ,$("#email").val())
		var exp4 = validatePassword('#pass' ,$("#pass").val())
		var exp5 = validateTelephone('#tlf' ,$("#tlf").val())
		var exp6 = validateZip('#zip' ,$("#zip").val())
		var exp7 = validateImage('#id_card' , $('#id_card')[0].files[0])
		var exp8 = validateCheckbox()

		console.log({
			'firstName': exp1,
			'lastName': exp2,
			'email': exp3,
			'password': exp4,
			'telephone': exp5,
			'zip': exp6,
			'image': exp7,
			'checked': exp8
		})
	})
}) // end of Document ready

/** Validate Functions -----------------------*/

	/**
	* Only Names (First, middle and last)
	* like 'John' or 'Alfred-Man' or D'Maio
	* or others names but without numbers and
	* Others special characters
	*/
	function validateName(input, str){
		if ( str.match(/^[A-Za-z]([a-zA-Z]| |-|')+$/g) ) {
			$(input).addClass('is-valid')
			$(input).removeClass('is-invalid')

			return true
		} else {
			$(input).addClass('is-invalid')
			$(input).removeClass('is-valid')
			
			return false
		}
	}

	/**
	* Validate the email
	*/
	function validateEmail(input, str){
		if ( str.match(/^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/g) ) {
			$(input).addClass('is-valid')
			$(input).removeClass('is-invalid')

			return true
		} else {
			$(input).addClass('is-invalid')
			$(input).removeClass('is-valid')
			
			return false
		}
	}

	/**
	* length from 8 to 16 characters
	* MIN of 1 May / 1 number / 1 Symbol
	*/
	function validatePassword(input, str){
		if ( str.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,16}$/g) ) {
			$(input).addClass('is-valid')
			$(input).removeClass('is-invalid')

			return true
		} else {
			$(input).addClass('is-invalid')
			$(input).removeClass('is-valid')
			
			return false
		}
	}

	/**
	* Accepts:
	*   | +42 555.123.4567 | +1-(800)-123-4567 | +7 555 1234567   | +7(926)1234567  | (926) 1234567
	*	| +79261234567     | 926 1234567       | 9261234567       | 1234567         | 123-4567 
	*	| 123-89-01        | 495 1234567       | 469 123 45 67    | 89261234567     | 8 (926) 1234567 
	*	| 926.123.4567     | 415-555-1234      | 650-555-2345     | (416)555-3456   | 202 555 4567      
	*	| 4035555678       | 1 416 555 9292    | 0424 620 0101    | 0424-620-0101   | 0424-620-01-01   
	*	| (424) 620 0101   | (424)-620-0101    | +54 424 620 0101
	*/
	function validateTelephone(input, str){
		if ( str.match(/^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/g) ) {
			$(input).addClass('is-valid')
			$(input).removeClass('is-invalid')

			return true
		} else {
			$(input).addClass('is-invalid')
			$(input).removeClass('is-valid')
			
			return false
		}
	}

	/**
	* Only 4 digits (Guatemala zip code example)
	* You can change this number
	*/
	function validateZip(input, str){
		if ( str.match(/\b(\d){4}\b/) ) {
			$(input).addClass('is-valid')
			$(input).removeClass('is-invalid')

			return true
		} else {
			$(input).addClass('is-invalid')
			$(input).removeClass('is-valid')
			
			return false
		}
	}

	/**
	* Validate the Image Format
	* the size and if this is empty
	*/
	function validateImage(input, data){
		if ( !(data == undefined) ) {
			if (data.size <= 3000000) {
				if ( data.type == 'image/jpeg' || data.type == 'image/jpg' || data.type == 'image/gif' || data.type == 'image/png' ) {
					$(input).addClass('is-valid')
					$(input).removeClass('is-invalid')

					return true
				} else {
					$(input).addClass('is-invalid')
					$(input).removeClass('is-valid')
					
					return false
				}
			}else {
				$(input).addClass('is-invalid')
				$(input).removeClass('is-valid')
				
				return false
			}
		} else {
			$(input).addClass('is-invalid')
			$(input).removeClass('is-valid')
			
			return false
		}
	}

	/**
	* At least one has to be selected
	*/
	function validateCheckbox(){
		if ( $('#cb1').is(':checked') || $('#cb2').is(':checked') || $('#cb3').is(':checked') ) {
			$('#cbm').hide()
			return true
		} else {
			$('#cbm').show()
			return false
		}
	}
