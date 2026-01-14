#!/usr/bin/env python3
"""
下载 Google Drive 图片的脚本
使用方法：
1. 在 Google Drive 中右键点击图片，选择"获取链接"
2. 确保链接权限设置为"任何拥有链接的人都可以查看"
3. 从链接中提取文件 ID（链接中的 /d/FILE_ID/ 部分）
4. 运行此脚本：python3 download_image.py FILE_ID
"""

import sys
import urllib.request
import urllib.parse
import re

def extract_file_id_from_url(url):
    """从 Google Drive URL 中提取文件 ID"""
    patterns = [
        r'/file/d/([a-zA-Z0-9_-]+)',
        r'id=([a-zA-Z0-9_-]+)',
        r'/folders/([a-zA-Z0-9_-]+)',
    ]
    
    for pattern in patterns:
        match = re.search(pattern, url)
        if match:
            return match.group(1)
    return None

def download_from_drive(file_id, output_filename='hero-image.jpg'):
    """从 Google Drive 下载文件"""
    # Google Drive 直接下载链接
    url = f"https://drive.google.com/uc?export=download&id={file_id}"
    
    try:
        print(f"正在从 Google Drive 下载图片...")
        print(f"文件 ID: {file_id}")
        print(f"保存为: {output_filename}")
        
        # 创建请求
        req = urllib.request.Request(url)
        req.add_header('User-Agent', 'Mozilla/5.0')
        
        with urllib.request.urlopen(req) as response:
            with open(output_filename, 'wb') as out_file:
                out_file.write(response.read())
        
        print(f"✅ 下载成功！文件已保存为 {output_filename}")
        return True
    except urllib.error.HTTPError as e:
        if e.code == 403:
            print(f"❌ 下载失败: 文件可能未设置为公开分享")
        else:
            print(f"❌ 下载失败: HTTP {e.code}")
        print("\n提示：")
        print("1. 确保文件已设置为'任何拥有链接的人都可以查看'")
        print("2. 或者手动下载文件并命名为 hero-image.jpg 放在项目目录中")
        return False
    except Exception as e:
        print(f"❌ 下载失败: {e}")
        print("\n提示：")
        print("1. 确保文件已设置为'任何拥有链接的人都可以查看'")
        print("2. 或者手动下载文件并命名为 hero-image.jpg 放在项目目录中")
        return False

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("使用方法: python3 download_image.py <FILE_ID 或 URL>")
        print("\n如何获取文件 ID:")
        print("1. 在 Google Drive 中右键点击 salemhung2025.jpg")
        print("2. 选择'获取链接'")
        print("3. 从链接中复制文件 ID（例如：链接为 https://drive.google.com/file/d/1ABC.../view")
        print("   文件 ID 就是 1ABC... 这部分）")
        print("\n或者直接粘贴完整的 Google Drive 链接，脚本会自动提取文件 ID")
        sys.exit(1)
    
    input_arg = sys.argv[1]
    
    # 检查是否是 URL
    if input_arg.startswith('http'):
        file_id = extract_file_id_from_url(input_arg)
        if not file_id:
            print("❌ 无法从 URL 中提取文件 ID")
            print("请直接提供文件 ID")
            sys.exit(1)
        print(f"从 URL 中提取的文件 ID: {file_id}")
    else:
        file_id = input_arg
    
    download_from_drive(file_id)

