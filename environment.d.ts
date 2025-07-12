declare global {
  namespace NodeJS {
    interface ProcessEnv {
      INOREADER_USER_ID: string;
    }
  }
}

export {};
