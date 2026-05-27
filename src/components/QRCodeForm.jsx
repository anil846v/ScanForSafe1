export default function QRCodeForm() {
  const formUrl =
    'https://docs.google.com/forms/d/e/1FAIpQLSd9A7Dl1-VyVYOpzuSFH1dy_vWdsYBxjFUqh6h3LpmicZwKRg/viewform'

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-green-100 px-4">
      <div className="bg-white p-8 rounded-3xl shadow-2xl text-center max-w-md w-full">

        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Scan For Safe
        </h1>

        <p className="text-gray-600 mb-6">
          Scan the QR code below to open the safety verification form.
        </p>

        <a
          href={formUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={`https://api.qrserver.com/v1/create-qr-code/?size=320x320&data=${encodeURIComponent(formUrl)}`}
            alt="QR Code"
            className="mx-auto rounded-2xl shadow-lg hover:scale-105 transition duration-300"
          />
        </a>

        <p className="mt-6 text-sm text-gray-500">
          Scan using your mobile camera
        </p>

      </div>
    </div>
  )
}