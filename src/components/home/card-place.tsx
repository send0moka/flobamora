import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function CardPlace() {
    return (
        <div className="translate-y-12 sm:translate-y-20 rounded-md flex flex-col antialiased dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
                items={places}
                direction="right"
                speed="fast"
            />
        </div>
    )
}

const places = [
    {
        name: "Komodo Island",
        indo: "Pulau Komodo",
    },
    {
        name: "Riung 17 Islands",
        indo: "Riung 17 Pulau",
    },
    {
        name: "Kelimutu Lake",
        indo: "Danau Kelimutu",
    },
    {
        name: "Pink Beach",
        indo: "Pantai Pink",
    },
    {
        name: "Mount Kelimutu",
        indo: "Gunung Kelimutu",
    },
    {
        name: "Wae Rebo Village",
        indo: "Desa Wae Rebo",
    },
    {
        name: "Padar Island",
        indo: "Pulau Padar",
    },
    {
        name: "Koka Beach",
        indo: "Pantai Koka",
    },
    {
        name: "Kanawa Island",
        indo: "Pulau Kanawa",
    }
]