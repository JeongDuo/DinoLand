import { ChattingInputType } from '@/types';

export const ASSETS_PATH = 'src/assets/';

export const CHATTING_INPUT_TYPE: Record<ChattingInputType, string> = {
  all: '전체',
  group: '그룹',
  private: '귓속말',
} as const;
