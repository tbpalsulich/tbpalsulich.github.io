let eyes = document.querySelectorAll(".eye");

document.addEventListener("mousemove", animate);
document.onclick = animate;

function animate(e) {
    eyes.forEach(function(eye) {
        let eyeBall = eye.getElementsByClassName("eyeball")[0],
            pupil = eye.getElementsByClassName("pupil")[0],
            glare = eye.getElementsByClassName("glare")[0],
            eyeR = eyeBall.r.baseVal.value,
            pupilR = pupil.rx.baseVal.value,
            glareR = glare.rx.baseVal.value,
            bound = eyeBall.getBoundingClientRect(),
            cx = bound.left + eyeR,
            cy = bound.bottom - eyeR,
            x = e.clientX - cx,
            y = e.clientY - cy,
            d = Math.sqrt(x*x + y*y),
            theta = Math.atan2(y,x),
            angle = theta*180/Math.PI + 360;
    
        let max = 200.0
        if (d > max) d = max;
    
        let t  = d / max * (eyeR - pupilR),
            t2 = d / max * (eyeR - glareR);
    
        pupil.style.transform = `translate(${t + "px"}) rotate(${angle + "deg"})`;
        pupil.style.transformOrigin = `${eyeBall.cx.baseVal.value - t +"px"} ${eyeBall.cy.baseVal.value +"px"}`;
    
        glare.style.transform = `translate(${t2 + "px"}) rotate(${angle + "deg"})`;
        glare.style.transformOrigin = `${eyeBall.cx.baseVal.value - t2 +"px"} ${eyeBall.cy.baseVal.value +"px"}`;
    });
}
