import { useImmer } from "use-immer";

export default function immerTest() {
  const [state, setState] = useImmer({
    id: 14,
    email: "stewie@familyguy.com",
    profile: {
      name: "Stewie Griffin",
      bio: "You know, the... the novel you've been working on",
      age: 1
    }
  });
  function changeBio() {
    setState((draft) => {
      draft.profile.bio = "newBio";
    });
  }

  return <div onClick={changeBio}>{state.profile.bio}</div>;
}
