module.exports = function getZerosCount(number, base) {
               
                let multiplier, mult_grade_base, accum_grade, number_clone, temp_grade;
                let result;
                let base_clone = base;
                // to solve the task one should devide the number by the highest multiplier 
                // of the base (multiplier must be a prime number) recursively 
                // and sum up the results of the division
                // if multiplier is not a prime number, it is divided by greater than 1 mult_grade_base 
                for (multiplier = 2; multiplier <= base; multiplier++) {

                    if (base_clone % multiplier === 0) {

                        mult_grade_base = 0;
                        accum_grade = 0;
                        // the accumulated highest grade of the number
                        number_clone = number;

                        while (base_clone % multiplier === 0) {

                            mult_grade_base++;
                            base_clone = Math.floor(base_clone / multiplier);

                        }
                        // finding the maximum grade of the number by dividing 
                        // the number by its multiplier and getting a sum of the division results
                        (function grades() {

                            temp_grade = Math.floor(number_clone / multiplier);
                            accum_grade = accum_grade + temp_grade;
                            number_clone = temp_grade;

                            if (temp_grade > 0) {

                                grades();

                            }

                        }
                        )();

                        result = Math.floor(accum_grade / mult_grade_base);
                    }

                }

                return result;
            }
