import { ChattingInputType } from '@/types';

export const ASSETS_PATH = 'src/assets/';

export const PLACEHOLDER_INPUT_DEFAULT = '메시지를 입력하세요.';
export const PLACEHOLDER_INPUT_PRIVATE = 'Ex) "@사용자명 메시지" 형식으로 입력하세요.';

export const CHATTING_INPUT_TYPE: Record<ChattingInputType, string> = {
  all: '전체',
  group: '그룹',
  private: '귓속말',
} as const;
