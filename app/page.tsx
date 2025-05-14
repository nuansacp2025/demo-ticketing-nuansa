"use client"

function handleLogin(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const formData = new FormData(event.target as HTMLFormElement);
  const email = formData.get("email") as string;
  const ticketCode = formData.get("ticketCode") as string;
  fetch("/api/login", {
    method: "POST",
    body: JSON.stringify({ email, ticketCode }),
  }).then(response => {
    if (response.redirected) {
      window.location.href = response.url;
    } else {
      response.json().then(({ error }) => { console.log(response.status, error); });
    }
  });
  
}

export default function Home() {
  return (
    <div className="flex h-screen flex-col justify-center px-6">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleLogin}>
          <div>
            <label htmlFor="email" className="block text-sm/6 font-medium text-[#1A7F7D]">Email address</label>
            <div className="mt-2">
              <input type="email" name="email" id="email" autoComplete="email" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#1A7F7D] sm:text-sm/6"/>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="ticketCode" className="block text-sm/6 font-medium text-[#1A7F7D]">Ticket ID</label>
            </div>
            <div className="mt-2">
              <input type="text" name="ticketCode" id="ticketCode" autoComplete="ticketCode" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#1A7F7D] sm:text-sm/6"/>
            </div>
          </div>

          <div>
            <button type="submit" className="flex w-full justify-center rounded-md bg-[#1A7F7D] px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-[#1A7F7D] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1A7F7D]">Sign in</button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm/6">
          <a href="#" className="font-semibold text-[#1A7F7D]/75 hover:text-[#1A7F7D]">How do I find my ticket ID?</a>
        </p>
      </div>
    </div>
  );
}
