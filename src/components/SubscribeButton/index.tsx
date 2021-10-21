import styles from "./styles.module.scss";

import { signIn, useSession } from "next-auth/client";
import { api } from "../../services/api";
import { getStripeJs } from "../../services/stripejs";
import { useRouter } from "next/router";

export function SubscribeButton() {
  const session: any = useSession();
  const router = useRouter();
  console.log(session[0])

  async function handleSubscribe() {

    
    if (!session[0]) {
      signIn("github");
      return;
    }

    if (session[0].activeSubscription) {
      router.push("/posts");
      return;
    }

    try {
      const response = await api.post("/subscribe");

      const { sessionId } = response.data;

      const stripe = await getStripeJs();

      await stripe.redirectToCheckout({ sessionId });
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <button
      type="button"
      className={styles.subscribeButton}
      onClick={handleSubscribe}
    >
      Subscribe now
    </button>
  );
}
