const accounts = [{ phone: "01066258336", password: "f1g6n" }, 
                  { phone: "01559831235", password: "o2n3" },
                  { phone: "01125286165", password: "n5t9" },
                  { phone: "01012835186", password: "o7y5" },
                  { phone: "01289020751", password: "b4v6" },
                  { phone: "01111849989", password: "t8h1" }
                  
                
];

function login() {
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value.trim();

    const user = accounts.find(account => account.phone === phone  && account.password === password);
    if (user) {
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('content').style.display = 'block';
        document.body.style.display = 'block';
    } else {
        alert('البريد الإلكتروني أو كلمة المرور غير صحيحة');
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    document.body.style.display = 'block';
});
