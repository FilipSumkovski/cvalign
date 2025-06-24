async function submitCV() {
  const cv = document.getElementById("cv").value;
  const jd = document.getElementById("jd").value;
  const tone = document.getElementById("tone").value;
  const btn = document.querySelector("button");
  btn.disabled = true;
  btn.textContent = "Tailoring...";

  try {
    const res = await fetch("/api/tailor", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cv, jd, tone })
    });
    const data = await res.json();
    document.getElementById("output").value = data.result;
  } catch (err) {
    console.error(err);
    alert("Error tailoring CV.");
  } finally {
    btn.disabled = false;
    btn.textContent = "Tailor My CV";
  }
}
