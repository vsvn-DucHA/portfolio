import pdfplumber
import os

# PDF file path
pdf_path = "Hoang-Anh-Duc-TopCV.vn-060126.213010.pdf"

# Check if file exists
if not os.path.exists(pdf_path):
    print(f"Error: File '{pdf_path}' not found!")
    exit(1)

# Extract text from PDF
print(f"Extracting text from {pdf_path}...")
all_text = []

try:
    with pdfplumber.open(pdf_path) as pdf:
        print(f"Total pages: {len(pdf.pages)}")

        for i, page in enumerate(pdf.pages, 1):
            print(f"Processing page {i}...")
            text = page.extract_text()
            if text:
                all_text.append(f"# Page {i}\n\n{text}\n\n")

            # Also extract tables if any
            tables = page.extract_tables()
            if tables:
                for j, table in enumerate(tables, 1):
                    all_text.append(f"## Table {j} on Page {i}\n\n")
                    for row in table:
                        all_text.append(
                            "| "
                            + " | ".join([str(cell) if cell else "" for cell in row])
                            + " |\n"
                        )
                    all_text.append("\n")

    # Combine all text
    full_text = "".join(all_text)

    # Save to markdown file
    output_file = "cv_content.md"
    with open(output_file, "w", encoding="utf-8") as f:
        f.write(full_text)

    print(f"\n✓ Successfully extracted text to {output_file}")
    print(f"Total characters: {len(full_text)}")

except Exception as e:
    print(f"Error processing PDF: {e}")
    exit(1)

def whatIWant():
    pass
def whatIGet():
    pass

# from sqlalchemy.orm import AttributeEvents

AttributeEvents