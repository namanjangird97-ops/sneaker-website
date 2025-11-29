function displaySuccess() {
    var txnId = document.getElementById('txn_id').value;
    
    // Simple check ki user ne kuch likha hai ya nahi
    if (txnId.length > 5) {
        alert("Payment ki jaanch ki jaa rahi hai. Aapka order jaldi hi confirm hoga! (Demo Successful)");
        
        // Agar aap chahte hain ki success ke baad user dusre page par chala jaaye
        // window.location.href = "thankyou.html"; 
    } else {
        alert("Kripya sahi Transaction ID daalein.");
    }
}