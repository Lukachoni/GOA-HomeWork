
            let age = prompt("ასაკი დაწერეთ");
            age = Number(age);

            
            if (age >= 80) {
                alert("დაბერდი ძმაო ");
            } else if (age >= 18) {
                alert("შენ ხარ სრულწოვანი ");
            } else if (age >= 12) {
                alert("შენ ხარ თინეიჯერი/მოზარდი ");
            } else if (age >= 5) {
                alert("შენ ხარ ბავშვი ");
            } else {
                alert("ასაკი შესამოწმებლად არ არის საკმარისი ");
            }
     