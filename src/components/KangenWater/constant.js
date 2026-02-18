export const IMAGES = {
  group: "https://hehq4lncabahxdoc.public.blob.vercel-storage.com/1770694607344-huplt9.jpg",
  machines: [
    "https://hehq4lncabahxdoc.public.blob.vercel-storage.com/1770694697151-x8pukm.jpg",
    "https://hehq4lncabahxdoc.public.blob.vercel-storage.com/1770694716350-fsszev.jpg",
    "https://hehq4lncabahxdoc.public.blob.vercel-storage.com/1770694757453-jgz005.jpg",
  ],
  proofs: [
    {
      url: "https://hehq4lncabahxdoc.public.blob.vercel-storage.com/1770697535553-f14ha4.jpg",
      title: "Masalah BAK Teratasi",
    },
    {
      url: "https://hehq4lncabahxdoc.public.blob.vercel-storage.com/1770697416361-bo9nfl.jpg",
      title: "Gula darah kembali normal",
    },
    {
      url: "https://hehq4lncabahxdoc.public.blob.vercel-storage.com/1770695083829-nhcne1.jpg",
      title: "Tekanan darah turun",
    },
    {
      url: "https://hehq4lncabahxdoc.public.blob.vercel-storage.com/1770695413990-07pc5i.jpg",
      title: "Batuk Pilek teratasi",
    },
  ],
};

export const FAQS = [
  {
    q: "Sebenarnya Kangen Water ini apa?",
    a: "Kangen Water adalah air hasil teknologi ionisasi dari mesin Enagic yang dipasang langsung di keran dapur Anda. Bukan sekadar air minum biasa, ini sistem air rumah tangga premium yang dirancang untuk mendukung hidrasi optimal dan kualitas hidup yang lebih baik.",
  },
  {
    q: "Kenapa banyak orang investasi puluhan juta untuk mesin ini?",
    a: "Karena mereka tidak melihatnya sebagai 'biaya', tapi sebagai: Investasi kesehatan jangka panjang keluarga, pengeluaran air minum yang lebih efisien, dan aset bisnis yang bisa menghasilkan.",
  },
  {
    q: "Apakah ini obat untuk penyakit tertentu?",
    a: "Bukan. Kangen Water bukan obat dan tidak menggantikan pengobatan medis. Namun, banyak pengguna merasakan tubuh lebih segar, pencernaan lebih nyaman, dan energi lebih stabil ketika rutin mengonsumsinya.",
  },
  {
    q: "Apa bedanya dengan air galon atau filter biasa?",
    a: "Mesin Enagic tidak hanya menyaring air, tetapi juga mengubah karakteristik air melalui proses elektrolisis sehingga menghasilkan beberapa level pH sesuai kebutuhan.",
  },
];

export const WA_LINK = "https://wa.me/628123456789";

export const GLOBAL_STYLES = `
  .prose-ai p { margin-bottom: 12px; line-height: 1.7; }
  .prose-ai strong { color: #1e40af; font-weight: 700; }
  .prose-ai ul { list-style: disc; padding-left: 20px; margin-bottom: 16px; }
  .prose-ai li { margin-bottom: 6px; }
  .prose-ai h3 { color: #1e3a8a; font-weight: 800; margin: 16px 0 8px; font-size: 1.1rem; }
`;

export function parseMarkdown(text) {
  if (!text) return "";
  let html = text
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    .replace(/^### (.*$)/gim, "<h3>$1</h3>")
    .replace(/^## (.*$)/gim, "<h2>$1</h2>")
    .replace(/^- (.*$)/gim, "<li>$1</li>")
    .replace(/(<li>.*<\/li>)+/gim, (match) => `<ul>${match}</ul>`);

  return html
    .split(/\n\n+/)
    .map((part) => {
      if (part.trim().startsWith("<")) return part;
      return `<p>${part.replace(/\n/g, "<br>")}</p>`;
    })
    .join("");
}
