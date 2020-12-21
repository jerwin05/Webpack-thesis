(()=>{const e=document.getElementById("covidUpdateDate"),t=document.getElementById("newCasesTitle"),n=document.getElementById("activeCasesTitle"),o=document.getElementById("newCases"),a=document.getElementById("activeCases"),c=document.getElementById("suspected"),d=document.getElementById("probable"),s=document.getElementById("cofirmedCases"),l=document.getElementById("testedNegative"),i=document.getElementById("recovered"),m=document.getElementById("death"),p=document.getElementById("notes"),h=document.getElementById("covidPatientList"),r=document.getElementById("history"),u=document.getElementById("loadingElement"),C=document.getElementById("sectionContainer"),E="127.0.0.1"===window.location.hostname||"localhost"===window.location.hostname?"http://localhost:3000/admin-profile.html":"https://teresa-covid-tracker-test.herokuapp.com/admin-profile.html",v="127.0.0.1"===window.location.hostname||"localhost"===window.location.hostname?"http://localhost:3000/authenticate-user":"https://teresa-covid-tracker-test.herokuapp.com/authenticate-user",y="127.0.0.1"===window.location.hostname||"localhost"===window.location.hostname?"http://localhost:3000/covid-update":"https://teresa-covid-tracker-test.herokuapp.com/covid-update",g="127.0.0.1"===window.location.hostname||"localhost"===window.location.hostname?"http://localhost:3000/patient-list":"https://teresa-covid-tracker-test.herokuapp.com/patient-list",w="127.0.0.1"===window.location.hostname||"localhost"===window.location.hostname?"http://localhost:3000/patient-list-history":"https://teresa-covid-tracker-test.herokuapp.com/patient-list-history",x="127.0.0.1"===window.location.hostname||"localhost"===window.location.hostname?"http://localhost:3000/announcement":"https://teresa-covid-tracker-test.herokuapp.com/announcement";fetch(v,{}).then((e=>{e.text().then((e=>{"true"===e&&window.location.replace(E)}))}));fetch(y).then((h=>{C.style.display="block",u.style.display="none",h.json().then((h=>{a.textContent=h[0].active_cases,o.textContent=h[0].new_cases,c.textContent=h[0].suspected,d.textContent=h[0].probable,s.textContent=h[0].confirmed_cases,l.textContent=h[0].tested_negative,i.textContent=h[0].recovered,m.textContent=h[0].death,h[0].new_cases>1?t.textContent="New Cases":t.textContent="New Case",h[0].active_cases>1?n.textContent="Active Cases":n.textContent="Active Case";const r=h[0].date_updated;if(e.textContent=`${r}`,!h[0].notes||/\s+$/.test(h[0].notes)){const e=document.createElement("p");e.textContent="No notes",p.appendChild(e)}else{const e=document.createElement("pre");e.textContent=h[0].notes,e.className="main--body",p.appendChild(e)}}))})),fetch(g).then((e=>{e.json().then((e=>{if(e.message){const e=document.createElement("p");e.textContent="No patient",e.className="nopatient",h.appendChild(e)}else e.forEach(((e,t,n)=>{const o=document.createElement("div"),a=document.createElement("div"),c=document.createElement("div"),d=document.createElement("p"),s=document.createElement("p"),l=document.createElement("p"),i=document.createElement("p"),m=document.createElement("p");d.textContent=e.patient_no,s.textContent=e.age,l.textContent=e.gender,i.textContent=e.barangay,m.textContent=e.status,o.className="covidpatientlist--table-grid",a.className="covidpatientlist--table-grid covidpatientlist--table-templatecolumns",c.className="covidpatientlist--patientdetails covidpatientlist--table-grid",c.appendChild(s),c.appendChild(l),a.appendChild(d),a.appendChild(c),o.appendChild(a),o.appendChild(i),o.appendChild(m),h.appendChild(o)}))}))})),fetch(w).then((e=>{e.json().then((e=>{if(e.message){const e=document.createElement("p");e.textContent="No history",r.appendChild(e)}else for(var t=0,n=e.history_count;t<n;t++){const n=document.createElement("div"),c=document.createElement("div"),d=document.createElement("span");d.className="history--date",c.className="history--people",d.textContent=e[`history${t+1}`].date,n.appendChild(d),n.appendChild(c);for(var o=0,a=e[`history${t+1}`].recovered_count;o<a;o++){const n=document.createElement("p"),a=document.createElement("p"),d=document.createElement("p"),s=document.createElement("p");n.textContent=e[`history${t+1}`][`recovered${o+1}`].patient_no,a.textContent=e[`history${t+1}`][`recovered${o+1}`].age,d.textContent=e[`history${t+1}`][`recovered${o+1}`].gender,s.textContent=e[`history${t+1}`][`recovered${o+1}`].barangay,c.appendChild(n),c.appendChild(a),c.appendChild(d),c.appendChild(s)}r.appendChild(n)}}))})),fetch(x).then((e=>{e.json().then((e=>{if(e.message){const e=document.createElement("p");e.textContent="No announcement",announcementSection.appendChild(e)}else e.reverse(),e.forEach((e=>{const t=document.createElement("pre"),n=document.createElement("div"),o=document.createElement("h3"),a=document.createElement("small");t.textContent=e.body,o.className="announcement--element main--heading",t.className="announcement--element main--body",a.className="announcement--element",o.textContent=e.title,a.textContent=e.date,n.appendChild(o),n.appendChild(t),n.appendChild(a),announcementSection.appendChild(n)}))}))}))})();