import { useStory } from "components";
import { useNotification } from "components/NotificationProvider";

export default () => {
  const notification = useNotification();
  const story = useStory();

  return {
    finish: () => {
      const currentMemory = story.data["currentMemory"];
      const lastStorylet = story.data["lastStorylet"];

      const memories = story.data["memories"] || [];
      const updatedMemories = memories.map((memory) => ({
        ...memory,
        status: memory.id === currentMemory.id ? "viewed" : memory.status,
      }));

      story.update({ id: "currentMemory", value: undefined });
      story.update({ id: "lastStorylet", value: undefined });
      story.update({ id: "memories", value: updatedMemories });

      story.move(lastStorylet);
    },
    initialize: (memories) => {
      story.update({ id: "memories", value: memories });
    },
    refresh: () => {
      const memories = story.data["memories"] || [];
      const updatedMemories = memories.map((memory) => {
        let updatedStatus = memory.status;
        if (memory.status === "new") {
          updatedStatus = "highlight";
        }
        if (memory.status === "highlight") {
          updatedStatus = "default";
        }
        return { ...memory, status: updatedStatus };
      });
      story.update({ id: "memories", value: updatedMemories });
    },
    start: (memory) => {
      story.update({ id: "lastStorylet", value: story.currentStorylet });
      story.update({ id: "currentMemory", value: memory });
      story.update({ id: "currentSection", value: undefined });
      story.move(memory.storylet);
    },
    unlock: (memory) => {
      let unlocked = false;
      const updatedMemories = [...story.data["memories"]] || [];
      const memoryIndex = updatedMemories.findIndex(
        (element) => element.id === memory.id
      );

      if (memoryIndex === -1) {
        const { storylet: storyletComponent, ...storylet } = memory.storylet;
        updatedMemories.push({ ...memory, status: "new", storylet: storylet });
        unlocked = true;
      } else if (updatedMemories[memoryIndex]?.status === "locked") {
        updatedMemories[memoryIndex] = { ...memory, status: "new" };
        unlocked = true;
      }

      if (unlocked) {
        story.update({ id: "memories", value: updatedMemories });
        notification.open(
          <>
            {"Recuerdo desbloqueado: "}
            <strong>"{memory.title}"</strong>
          </>
        );
      }
    },
    values: story.data["memories"] || [],
  };
};
